const express = require('express')
const app = express()
const port = 3000


// Routing
app.get('/',(req,res)=>
{
  res.send("hello")
})

app.get('/ab*cd', (req, res) => {
  res.send('done')

  // Route handlers
  

}) 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})