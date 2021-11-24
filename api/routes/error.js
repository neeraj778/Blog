const express = require('express');
const app = express();

app.use((req,res,next) =>{
    const err = new Error("Incorrect route!");
    err.status = 404;
    next(err);
});

app.use((error,req,res,next) =>{
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    })
});

module.exports = app;