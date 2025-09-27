const express = require("express")
const app = express()
app.use(express.json())


let data = [{user:"Dev",password:4567}]

app.get("/",(req,res)=>{
    res.send(data)
})

app.post("/login",(req,res)=>{
    data.push(req.body)
    res.send("Form Submit")
})

app.get("/web",(req,res)=>{
    res.render("index.ejs")
})

app.get("/user/:id",(req,res)=>{
    const id = req.params.id
    res.send(`User Id :- ${id}`)
})



app.use(express.static("public"))
app.set('view engine','ejs')
let port = 5000
app.listen(port , ()=>{
    console.log(`Running on port :- ${port}`)
})


