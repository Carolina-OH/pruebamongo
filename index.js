import 'dotenv/config';
import "./database/connectdb.js"
import express from "express";
import authRouter from './routes/auth.routh.js'

const app = express();
app.use(express.json());
app.use('/api/v1/',authRouter)

/* app.get("/",(req,res)=>{
    res.json({ok:true});
}) */


const PORT= process.env.PORT || 5000
app.listen(PORT, ()=> console.log("HOLA http://localhost:" + PORT))