// path 

// const path = require("path")

// console.log(path.basename(__filename)) // current file ka name

// console.log(path.dirname(__dirname)) // dir name

// console.log(path.extname(__filename))  // file extension 

// console.log(path.join(__dirname,'hello','server.js')) // join path


// const os = require("os")

// console.log(os.version())

// console.log(os.platform())

// console.log(os.cpus())

// console.log(os.freemem()/(1024 * 1024 * 1024 ))
// console.log(os.totalmem()/(1024 * 1024 * 1024 ))


//bytes 

// kb  - bytes / 1024
// MB  - bytes / 1024 * 1024
// GB  - bytes / 1024 * 1024 * 1024 


const url = require ("url")

const address = 'http://localhost:3000/product?cat=mobile& id= 121323 & price = $6768'

const data = url.parse(address,true)
console.log(data.query)
