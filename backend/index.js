import express, { request, response } from "express";
import { PORT, mongoDBRUL } from "./config.js";
import mongoose from "mongoose";

const app = express();

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome to MERN Stack Tutorial')
});

mongoose
.connect(mongoDBRUL)
.then(() => {
    console.log('App connected to database')
    app.listen(PORT, () => {
        console.log(`App is listening to port ${PORT}`)
    })
})
.catch((error)=>{
    console.log(error);
})