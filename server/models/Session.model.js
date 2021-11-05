const { Schema, model } = require('mongoose')
const ObjectId = Schema.Types.ObjectId

const Session = model(
  'Session',
  new Schema(
    {
      user: { type: ObjectId, ref: 'User' },
      createdAt: {
        type: Date,
        default: Date.now(),
        index: { expires: 1000 * 60 * 60 * 24 * 7 },
        // Session expiration is currently set at 1 week.
      },
    },
    {
      timestamps: true,
    },
  ),
)

module.exports = Session
