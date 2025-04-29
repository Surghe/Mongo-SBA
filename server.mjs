// Imports 
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/conn.mjs';

// Setups
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

// Midware
app.use(express.json());
connectDB();


// Routes

// Errware

app.use((err,req,res,next)=>{
    res.status(500).json({msg: err.message});
});


// Listener

app.listen(PORT, ()=>{
    console.log(`Server is running on PORT: ${PORT}`);
})