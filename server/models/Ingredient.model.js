const { Schema, model } = require('mongoose')

const Ingredient = model(
  'Ingredient',
  new Schema({
    spoonifyId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    image: String,
  }),
)

module.exports = Ingredient
