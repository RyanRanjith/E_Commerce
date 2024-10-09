import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'

// App Config
const app = express()
const port = process.env.PORT || 4000
connectDB()


// MiddleWare

app.use(express.json())
app.use(cors())

// api endpoints

app.get('/',(req,res)=> {
    res.send("API WOrking")
})

app.listen(port, ()=> console.log('Server Started on Port: '+port))