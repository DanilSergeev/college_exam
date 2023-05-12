const express = require("express")
const cors = require('cors');


const PORT = 5000
const app = express()





app.use(cors({
    credentials: true,
}));
app.use(express.json());






const start = async () =>{
    try {
        app.listen(PORT,()=> console.log(`Server started on port ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}
start()