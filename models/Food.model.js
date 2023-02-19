const mongoose = require("mongoose");

const foodSchema = mongoose.Schema({
  dish_name: { type: String, required: true },
  price: { type: Number, required: true },
  cuisine: String,
  rating: Number,
});

const FoodModel = mongoose.model("food", foodSchema);

module.exports = {
  FoodModel
};
