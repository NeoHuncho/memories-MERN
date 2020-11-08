import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app =express()

app.use('/posts',postRoutes) //this is middleware- this means that every route comming from postRoutes(imported on top) will be accessed with localhost/posts

app.use(bodyParser.json({limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = "mongodb+srv://william:Azer0007@cluster0.c37g5.mongodb.net/<dbname>?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology:true})//both use option are optional but avoid errors in console
.then(()=>app.listen(PORT,()=>console.log(`server running on port ${PORT}` )) )
.catch((error)=>console.log(error.message))

mongoose.set('useFindAndModify',false)