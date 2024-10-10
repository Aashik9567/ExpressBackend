const express = require('express')//import express from express
require('dotenv').config()
const app = express()
// const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/github', (req, res) => {
  res.send('aashik9567')
})
app.get("/login",(req,res)=>{
  res.send("<h1>login page enter email password</h1>")
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})