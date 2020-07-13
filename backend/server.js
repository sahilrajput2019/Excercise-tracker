const express  = require('express');
const cors     = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost/exercise_app",{useNewUrlParser:true ,useUnifiedTopology: true });

const userRouter      = require('./routes/users');
const exercisesRouter = require('./routes/exercises');

app.use('/users',userRouter);
app.use('/exercises',exercisesRouter);



//Giving Port No. 5000 for our local server to execute
app.listen("5000",() => {

    console.log("Server Started on Port 5000");
});