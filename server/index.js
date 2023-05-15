require('dotenv').config()
const express = require("express")
const cors = require('cors');
const sequelize  = require('./db');
const models = require("./models/models.js")
const router = require('./router/index')



const PORT = 5000
const app = express()





app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));
app.use(express.json());
app.use('/api', router);





const start = async () =>{
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT,()=> console.log(`Server started on port ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}
start()