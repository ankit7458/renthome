const express = require('express')
const connectDB = require('./Database')

const app = express();


connectDB()
// app.get('/',(req,res)=>{
//     res.send('Server is rnning');
// });

app.use(express.json());

app.use('/',require('./routes/auth'))



app.listen(8000,() =>{
    console.log('Server is Running on Port 8000')
})