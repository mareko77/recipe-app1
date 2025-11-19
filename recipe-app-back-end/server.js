/*const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const recipes = require('./controllers/recipes');

const db = knex({
  // connect to your own database here:
  client: 'mysql',
  connection: {
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'recipes1'
  }
});




const app = express();


app.use(cors())
app.use(express.json()); 

app.get('/', (req, res)=> { res.send(db.users) })
app.post('/signin', signin.handleSignin(db, bcrypt))
app.post('/register', (req, res) => { 
  console.log(req.body); 
  const users = {
    email: "mci@gmail.com",
    name: "mci",
    password: "123"
  } // Log request body for debugging
  register.handleRegister(req, res, db, bcrypt) })
app.get('/profile/:id', (req, res) => { profile.handleProfileGet(req, res, db)})

app.post('/recipes', (req, res) => recipes.handleAddRecipe(req, res, db));
app.get('/recipes/:userId', (req, res) => recipes.handleGetRecipes(req, res, db));
app.delete('/recipes/:id', (req, res) => recipes.handleDeleteRecipe(req, res, db));
app.put('/recipes/:id', (req, res) => recipes.handleUpdateRecipe(req, res, db)); 




app.listen(3002, ()=> {
  console.log('app is running on port 3002');
})*/

const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const recipes = require('./controllers/recipes');

const db = knex({
  client: 'mysql',
  connection: {
    host: 'db5019041392.hosting-data.io',
    user: 'dbu4342742',
    password: 'x!fPxWT-3iL6YTj',
    database: 'dbs14984349',
  },
});

const app = express();

app.use(cors());
app.use(express.json());

// Routes for registering, signing in, and fetching profiles
app.get('/', (req, res) => { res.send(db.users) })
app.post('/signin', signin.handleSignin(db, bcrypt));
app.post('/register', (req, res) => { 
  console.log(req.body); 
  register.handleRegister(req, res, db, bcrypt); 
});
app.get('/profile/:id', (req, res) => { profile.handleProfileGet(req, res, db) });

// Routes for handling recipes
app.post('/recipes', (req, res) => recipes.handleAddRecipe(req, res, db));
app.get('/recipes/:userId', (req, res) => recipes.handleGetRecipes(req, res, db));
app.delete('/recipes/:id', (req, res) => recipes.handleDeleteRecipe(req, res, db));
app.put('/recipes/:id', (req, res) => recipes.handleUpdateRecipe(req, res, db));

app.listen(3002, () => {
  console.log('app is running on port 3002');
});



