import express from 'express'
import cors from 'cors'
import Router from './routes/auth.js'
import connectToDatabase from './db/db.js'
import departmetRouter from './routes/department.js'
connectToDatabase()
const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/auth',Router)
app.use('/api/department',departmetRouter)
app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})