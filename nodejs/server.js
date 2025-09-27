const http = require ("http")
const fs = require("fs")

const homePage = fs.readFileSync("./tem/index.html")
const csshomePage = fs.readFileSync("./css/style.css")
const homeImage = fs.readFileSync("./media/session.jpg")
const homeJS =  fs.readFileSync("./js/index.js")

// fs.writeFileSync('hello.txt',"Hello class")

// const data = fs.readFileSync('hello.txt','utf-8')
// console.log(data)

const server = http.createServer((req,res)=>{
        if(req.url==="/"){
          res.write("Hello node js class...")
          res.end()
        }else if(req.url==="/web"){
          res.write(homePage)
          res.end()
        }else if(req.url==="/css/style.css"){
          res.write(csshomePage)
          res.end()
        }else if(req.url==="/media/session.jpg"){
          res.write(homeImage)
          res.end()
        }else if(req.url==="/js/index.js"){
          res.write(homeJS)
          res.end()
        }
})


let Port = 5000
server.listen(Port,()=>{
  console.log(`Running on port :- ${Port}`)
})