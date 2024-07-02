const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const jwt_decode = require('jwt-decode')

const router = express.Router()

const PORT = 4001


app.listen(PORT,()=>{
    console.log("Server is running on Port :"+PORT)
})

// secret code
const secretVal = 'L+e[F8+j9^GK>Z!)3sGg'

// Creating JWT Token
// we should pass our data and secret code as well
const token = jwt.sign({id:'123456'} ,secretVal)
console.log('Toekn :: ',token)

// verify our token
jwt.verify(token,secretVal,(err,decoded)=>{
    console.log("Decoded data :: ",decoded)
})
