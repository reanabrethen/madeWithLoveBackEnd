const express = require("express")
const router = express.Router()

const {
    getAllRecipes,
    createNewRecipe,
    updateRecipe,
    deleteRecipe
} = require("../recipes/controller/recipeController")

router.get("/", (req, res, next)=>{
    res.json({message: "Start adding new recipes or creating your own!"})
})

router.get("/get-all-recipes", getAllRecipes)

router.post("/create-recipe", createNewRecipe)

router.put("/update-recipe-by-id/:id", updateRecipe)

router.delete("/delete-recipe-by-id/:id", deleteRecipe)


module.exports= router