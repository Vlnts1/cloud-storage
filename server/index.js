require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const authRouter = require("./routes/Auth");
const app = express()
const PORT = process.env.PORT
const corsmiddleware = require ('./middleware/cors.middleware');

app.use(corsmiddleware)
app.use(express.json())
app.use("/api/auth", authRouter)

const start = async() => {
    try {
        mongoose.connect(process.env.DB_URL)
        app.listen(PORT, () => {
            console.log(`Server started on port`, PORT)
        })
    } catch (error) {
        
    }
}

start()