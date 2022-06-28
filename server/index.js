require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const authRouter = require("./routes/Auth");
const fileRouter = require("./routes/File");
const app = express()
const PORT = process.env.PORT
const corsmiddleware = require ('./middleware/cors.middleware');

app.use(corsmiddleware)
app.use(express.json())
app.use("/api/auth", authRouter)
app.use("/api/files", fileRouter)


const start = async() => {
    try {
        await mongoose.connect((process.env.DB_URL) , {
            useNewUrlParser:true,
            useUnifiedTopology:true
        })

        app.listen(PORT, () => {
            console.log(`Server started on port`, PORT)
        })
    } catch (e) {
        console.log(e)
    }
}

start()