const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000

require('dotenv').config()
console.log(process.env.MONGODBURL)

app.get('/', (req, res) => {
  res.send('Hello World!')
})
async function main(){
  await mongoose.connect(process.env.MONGODBURL)
}
main()
.then(()=>console.log("DB connected"))
.catch(err=> console.log(err))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
