const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    recipeCategory: {
        type: String
    },
    name: {
        type: String
    },
    author: {
        type: String
    },
    recipeIngredient: {
        type: String
    },
    recipeInstructions: {
        type: String
    },
    cookTime: {
        type: String
    },
    prepTime: {
        type: String
    },
    recipeYield: {
        type: Number
    }
})

module.exports = mongoose.model('recipe', recipeSchema)