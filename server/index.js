import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import dotenv from 'dotenv'

const app =express();
dotenv.config();

app.use(bodyParser.json({limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}));
app.use(cors());

app.get('/', (req,res) =>{
    res.send('Welcome to memories API')
})
app.use('/posts',postRoutes) //this is middleware- this means that every route comming from postRoutes(imported on top) will be accessed with localhost/posts
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology:true})//both use option are optional but avoid errors in console
.then(()=>app.listen(PORT,()=>console.log(`server running on port ${PORT}` )) )
.catch((error)=>console.log(error.message))

mongoose.set('useFindAndModify',false)