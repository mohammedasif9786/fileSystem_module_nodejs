
let fileSystem = require('fs')
fileSystem.readFile('../fileSystemModule/index.txt','utf-8',(error, found)=>{
    if(error){throw error}
console.log(found)
})

process.on('uncaughtException',(error)=>{
    console.log(`uncaughtException : ${error}`)

    process.exit(1)
})
