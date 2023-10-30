const express = require('express')


const app = express();



app.get('/',(req,res)=>{
    res.send('Server is rnning');
});



app.listen(8000,() =>{
    console.log('Server is Running on Port 8000')
})