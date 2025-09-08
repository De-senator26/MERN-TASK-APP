const express = require("express")
const app =express()
app.get("/",(reg,res)=>{
    res.send("<h2>WELCOME TO THE HOME PAGE!!!!<h2>")
})
const PORT = process.env. PORT || 5000

app.listen(PORT, ()=>{
    console.log('server Running 😒  on port: {PORT}')
    
})