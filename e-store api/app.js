require('dotenv').config()
require('express-async-errors')
const express=require('express')
const app=express()
//database
const connectDB=require('./db/connect')
const notFoundMiddleware=require('./middleware/not-found')
const errorHandlerMiddleware=require('./middleware/error-handler')
//routers
const authRouter=require('./routes/authRoutes')
//middleware
app.use(morgan('tiny'))
app.use(express.json())
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

app.use('/api/v1/auth',authRouter)

app.get('/',(req,res)=>{
    res.send('e commerce api')
})
const PORT=process.env.PORT||5000
const start=async()=>{
    try{
        await connectDB(process.env.MONGO_URL)
        app.listen(PORT,console.log('server is listening'))

    }catch(error){
        console.log(error)
    }

}

start()