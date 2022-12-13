const express = require('express');
const mongoose = require('mongoose');


const app = express();

mongoose.connect(`mongodb+srv://check:check@cluster0.j8yj8s8.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected Succesfully')
})


app.listen(5000, ()=>{
    console.log("server is running on port 5000");
})