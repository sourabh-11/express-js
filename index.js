const express = require('express')
const app = express()
const port = 3000


// Routing
app.get('/',(req,res)=>
{
  res.send("hello")
})

// app.get('/ab*cd', (req, res) => {
//   res.send('done')

// })
//   // Route handlers
//   const cb0 = function (req, res, next) {
//     console.log('CB0')
//     next()
//   }

  
//   const cb1 = function (req, res, next) {
//     console.log('CB1')
//     next()
//   }
  
//   app.get('/example/d', [cb0, cb1], (req, res, next) => {
//     console.log('the response will be sent by the next function ...')
//     next()
//   }, (req, res) => {
//     res.send('Hello from D!')
//   })




const express = require('express')
const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', (req, res) => {
  res.send('Birds home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About birds')
})

module.exports = router;


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})