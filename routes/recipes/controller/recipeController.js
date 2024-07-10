const Recipe = require('../model/Recipe')

async function getAllRecipes(req, res, next){
    try {
        let foundAllRecipes = await Recipe.find({})
        res.json({message: "success", payload: foundAllRecipes})
    } catch (error) {
        res.status(500).json({message: 'failed', error: error.message})
    }
}

async function createNewRecipe(req, res, next){
    try {
        const recipe = req.body
        const newRecipe = new Recipe(recipe) //makes obj to place into database represents model Recipe
        await newRecipe.save() //communicates to database
        res.json({message: "Success", payload: recipe})
        
    } catch (error) {
        res.status(500).json({message: "Error", error: error.message})
    }
}

async function updateRecipe(req, res, next){
    try {
        let updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.json({message: "Update successful", payload: updatedRecipe})
    } catch (error) {
        res.status(500).json({message: "Error", error: error.message})
    }
}

async function deleteRecipe(req, res, next){
    try {
        let deletedRecipe = await Recipe.findByIdAndDelete(req.params.id)
        res.json({message: "Successfully deleted", payload: deletedRecipe})
    } catch (error) {
        res.status(500).json({message: "Error", error: error.message})
    }
}





module.exports = {
    getAllRecipes,
    createNewRecipe,
    updateRecipe,
    deleteRecipe
}