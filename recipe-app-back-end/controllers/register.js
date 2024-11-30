const handleRegister = (req, res, db, bcrypt) => {
  const { email, name, password } = req.body;
  if (!email || !name || !password) {
    return res.status(400).json('Incorrect form submission'); 
  }

  const hash = bcrypt.hashSync(password); // Hash the password

  db.transaction((trx) => {
    // Insert the user first
    trx.insert({
      email: email,
      name: name,
      joined: new Date(),
    })
      .into('users')
      .then((userId) => {
        // Query the full user info after insertion
        return trx('users')
          .where({ id: userId[0] })
          .first()
          .then((user) => {
            return trx('login')
              .insert({
                hash: hash,
                email: email,
              })
              .then(() => {
                res.json(user); // Return the full user object
              });
          });
      })
      .then(trx.commit)
      .catch((err) => {
        //console.error('Error during transaction:', err); // Log the error
        trx.rollback();
        res.status(400).json('Unable to register');
      });
  }).catch((err) => {
    //console.error('Error initiating transaction:', err); // Log the error
    res.status(400).json('Unable to register');
  });
};

module.exports = {
  handleRegister,
};





