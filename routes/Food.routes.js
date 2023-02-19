const express = require("express");
const { FoodModel } = require("../models/Food.model");

const foodRouter = express.Router();

//GET REQUEST (getting all the dishes)
foodRouter.get("/", async (req, res) => {
  let query = req.query;
  try {
    const foods = await FoodModel.find(query);
    res.send(foods);
  } catch (err) {
    res.send(err);
  }
});

//POST REQUEST (adding new dish to the DB)
foodRouter.post("/post", async (req, res) => {
  try {
    const food = new FoodModel(req.body);
    await food.save();
    res.send("New dish added 😋");
  } catch (err) {
    res.send(err);
  }
});

//UPDATE REQUEST (changing details of an existing dish)
foodRouter.patch("/update/:id", async (req, res) => {
    const ID = req.params.id;
    const payload = req.body;
    try{
        await FoodModel.findByIdAndUpdate({_id:ID}, payload);
        res.send("Updated Successfully ✅")
    } catch (err){
        console.log(err);
    }
})

//DELETE REQUEST (deleting an existing dish from DB)
foodRouter.delete("/delete/:id", async (req,res) => {
    const ID = req.params.id;
    await FoodModel.findByIdAndDelete({_id:ID})
    res.send("Dish has been deleted 🗑️")
})

module.exports = {
  foodRouter
};
