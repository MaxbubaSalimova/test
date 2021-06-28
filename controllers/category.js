const Category = require('../models/Category')
const fs= require('fs')
const path = require('path')

exports.addCategory = (req,res) => {
    const category = new Category ({
        name: req.body.name
        
    })
    category.save()

    .then(() => {
        res.send(category)
        res.status(201).json({
            success: true 
            })
    })
    .catch((error) => 
    {
        res.status(400).json({
            success : false,
            data : error
        })
    })
}

exports.getCategoryById = async (req,res,next) =>{
    const user = await Category.findById(req.params.id)
    res.status(200).json({
        succes:true,
        data:user
    })
}

exports.deleteCategoryById = async (req,res,next) =>{
    const user = await Category.findOneAndDelete()
    res.status(200).json({
        succes:true,
        data:user
    })
}