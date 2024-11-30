const handleAddRecipe = (req, res, db) => {
    const { userId, name, description, ingredients, instructions, url_photo } = req.body;
    if (!userId || !name || !description || !ingredients || !instructions ||!url_photo  ) {
      return res.status(400).json("Incomplete recipe data");
    }
  
    db("recipes")
      .insert({ user_id: userId, name, description, ingredients, instructions, url_photo })
      .then(() => res.json("Recipe added successfully"))
      .catch((err) => res.status(400).json("Unable to add recipe"));
  };
  
  const handleGetRecipes = (req, res, db) => {
    const { userId } = req.params;
  
    db.select("*")
      .from("recipes")
      .where("user_id", userId)
      .then((recipes) => res.json(recipes))
      .catch((err) => res.status(400).json("Unable to fetch recipes"));
  };
  
  const handleDeleteRecipe = (req, res, db) => {
    const { id } = req.params;
  
    db("recipes")
      .where("id", id)
      .del()
      .then(() => res.json("Recipe deleted successfully"))
      .catch((err) => res.status(400).json("Unable to delete recipe"));
  };

  const handleUpdateRecipe = (req, res, db) => {
    const { id } = req.params;
    const { name, description, ingredients,instructions, url_photo } = req.body;
  
    db('recipes')
      .where({ id })
      .update({ name, description, ingredients, instructions,url_photo })
      .then(() => res.json('Recipe updated successfully'))
      .catch((err) => res.status(400).json('Unable to update recipe'));
  };
  
  module.exports = {
    handleAddRecipe,
    handleGetRecipes,
    handleDeleteRecipe,
    handleUpdateRecipe
  };
  
