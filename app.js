require("dotenv").config()
const cors=require('cors')
const authMiddleware=require('./back-end/middleware/authMiddleware')

const express=require('express')

const app=express();
const port = 4000
app.use(cors())

//dbConnection connection
const dbConnection=require("./back-end/db/dbConfige")
const questionRoutes = require("./back-end/routes/questionRoute");
const answerRouter = require("./back-end/routes/answareRoute")






//user routes middleware file
const userRoutes =require("./back-end/routes/userRoute")

//json middleware to extract json data
app.use(express.json())
//user routes middleware
app.use("/api/users",userRoutes)
app.use("/api/questions", authMiddleware,  questionRoutes); // Use the question routes

// answer routes middleware
app.use("/api/answer", authMiddleware,  answerRouter);




async function start(){
    try{
        const result=await dbConnection.execute("SELECT 'test' ")
        app.listen(port)

        console.log('database connected')
        console.log(`listening on ${port}`)
        }catch(err){
            console.log(err.message)

        }
}
start()

// app.listen(port,(err)=>{
//     if(err)
//     {

//         console.log(err.msg)
//     }
//     else{
//         console.log(`listening on ${port}`);
//     }

// })