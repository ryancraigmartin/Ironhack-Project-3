const { Schema, model } = require('mongoose')
const ObjectId = Schema.Types.ObjectId

const Cookbook = model(
  'CookBook',
  new Schema({
    spoonifyId: {
      type: String,
      require: true,
    },
    cookBookId: {
      type: ObjectId,
      require: true,
    },
    image: String,
    description: String,
    title: {
      type: String,
      require: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    recipes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Recipe',
      },
    ],
  }),
)

module.exports = Cookbook
