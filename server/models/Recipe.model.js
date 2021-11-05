const { Schema, model } = require('mongoose')

const Recipe = model(
  'Recipe',
  new Schema({
    name: { type: String },
    spoonifyId: { type: String },
    ingredients: [{ type: Schema.Types.ObjectId, ref: 'Ingredient' }],
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    image: { type: String },
    calories: { type: Number },
    description: { type: String },
    directions: [String],
  }),
)

module.exports = Recipe

// Note from Kyle: "Take another look at your author and ingredient keys and compare it to how I wrote mine in the Ingredient model"