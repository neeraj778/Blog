const express = require('express');
const routes = express.Router();

routes.get("/",(req,res,next) =>{
    res.status(200).json({"message":"List of all the products"})
});

routes.get("/:productID",(req,res,next) =>{
    const ID = req.params.productID;
    res.status(200).json({"message":"Requested product","ID":ID})
});

routes.post("/",(req,res,next) =>{
    const product = {
        name: req.body.name,
        price: req.body.price
    }
    res.status(201).json({
        "message":"New product created!",
        "createdProduct":product
    })
});


routes.patch("/:productID",(req,res,next) =>{
    const ID = req.params.productID;
    res.status(200).json({"message":"Updated product","ID":ID})
});


routes.delete("/:productID",(req,res,next) =>{
    const ID = req.params.productID;
    res.status(200).json({"message":"Deleted product","ID":ID})
});

module.exports = routes;