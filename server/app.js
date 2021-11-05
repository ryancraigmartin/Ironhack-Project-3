// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require('dotenv/config')

// ℹ️ Connects to the database
require('./db')

// Handles http requests (express is the node.js framework)
// https://www.npmjs.com/package/express
const express = require('express')

const app = express()

// ℹ️ This function is getting exported from the config folder. It configures most pieces of middleware to be used in the app.
require('./config')(app)

// 👇 Start handling routes here
// Contrary to the views version, all routes are controlled from the routes/index.js
const allRoutes = require('./routes')
app.use('/api', allRoutes)
app.use('/api/cookbooks', require('./routes/cookBook.routes.js'))
app.use('/api/ingredients', require('./routes/ingredient.routes.js'))
app.use('/api/recipes', require('./routes/recipe.routes.js'))

// ❗ Routes that don't exist or errors that you handle in specific routes

app.use((req, res, next) => {
  // this middleware runs whenever requested page is not available
  res.status(404).json({ errorMessage: 'This route does not exist' })
})

app.use((err, req, res, next) => {
  // whenever you call next(err), this middleware will log and handle the error
  console.error('ERROR', req.method, req.path, err)

  // only render if the error ocurred before sending the response
  if (!res.headersSent) {
    res.status(500).json({
      errorMessage: 'Internal server error. Check the server console',
    })
  }
})

module.exports = app
