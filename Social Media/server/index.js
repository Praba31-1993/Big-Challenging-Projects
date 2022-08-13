import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv"
import AuthRoute from "../server/Routes/AuthRoute.js"
import UserRoute from "../server/Routes/UserRoute.js"
import PostRoute from "../server/Routes/PostRoute.js"

// Routes

const app = express();

// Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

dotenv.config();


mongoose.connect(process.env.MONGO_DB,
{useNewUrlParser : true, useUnifiedTopology: true})
.then(()=>app.listen(process.env.PORT, ()=>console.log(`Listening at ${process.env.PORT}`)))
.catch((error)=>console.log(error));

// Router paths

app.use('/auth', AuthRoute)
app.use('/user', UserRoute)
app.use('/post', PostRoute)
