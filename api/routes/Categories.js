const Category = require("../models/Category");
const express = require("express");
const router = express.Router();

router.post("/add-category" , async (req,res) => {
    try {
        const newCategory = new Category(req.body);
        await newCategory.save();
        res.status(200).json("Item added succesfully");
    } catch (error) {
        console.log("req => ",req)

        // res.status(400).json(error);
    }
})

router.get("/get-category", async (req,res) => {
    try {
        const categories = await Category.find();
        res.send(categories);
    } catch (error) {
        res.status(400).json(error);
    }
})
module.exports = router;


