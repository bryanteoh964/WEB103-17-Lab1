import express from 'express'

// Initializing the App
const app = express()

// Access client's public and scripts
app.use('/public', express.static('./public'))
app.use('/scripts', express.static('./public/scripts'))

// CSS Styled Page
app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>')
})
  
const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`)
})


// What exactly is middleware? Please give some examples
// Middleware is a function that is executed between the request and response of an API call.
// It can be used to modify the request or response objects, or to perform some other action
// before the response is sent back to the client. Middleware is often used for authentication
// and authorization, logging, and error handling.