const express = require("express")
const {connect} = require("mongoose");
const cors = require("cors")
require("dotenv").config()

const app = express();
app.use(express.json());
  

app.use(cors({
    origin: ['http://localhost:8000'],
    methods: ["GET","POST","PUT","DELETE"],
    credentials: true
 }))

async function connectToDB(){
    await connect(process.env.MONGO_URI)
    .then(()=> console.log("MongoDb is connected"))
    .catch(()=> console.log("MongoDB in not connected"))
 }
 connectToDB()

app.get('/', (req, res)=>{
    res.json("Hi PersonSchema!")
 })
 const person = require("./routes/person")
app.use("/person", person)

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log(`Server http://localhost:${PORT} portda ishga tushdi`);
})
