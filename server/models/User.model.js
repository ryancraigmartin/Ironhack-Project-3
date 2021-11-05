const { Schema, model } = require('mongoose')

// TODO: Expand the user model to include more information and set defaults

const User = model(
  'User',
  new Schema(
    {
      username: {
        type: String,
        unique: true,
        required: true,
      },
      bio: String,
      email: {
        type: String,
        unique: true,
        required: true,
      },
      firstName: String,
      lastName: String,
      password: {
        type: String,
        required: true,
      },
      profileImage: String,
      favorites: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Recipe',
        },
      ],
    },
    {
      timestamps: true,
    },
  ),
)

module.exports = User
