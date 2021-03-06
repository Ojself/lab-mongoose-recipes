const mongoose = require("mongoose");
const Schema = mongoose.Schema;

 const recipeSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  level: {
    type: String,
    enum: ["Easy Peasy", "Amateur Chef", "UltraPro Chef"]
  },
  ingredients: {
    type: Array
  },
  cuisine: {
    type: String,
    required: false
  },
  dishType: {
    type: String,
    enum: ["Breakfast", "Dish", "Snack", "Drink", "Dessert", "Other"]
  },
  image: {
    type: String,
    default: "https://www.bbcgoodfood.com/sites/default/files/styles/category_retina/public/spanish-tortilla.jpg?itok=Uq5KFlWd"
  },
  duration: {
    type: Number,
    min: 0
  },
  creator: {
    type: String
  },
  created: {
    type: Date,
    default: Date.now
  }
})

 module.exports = mongoose.model("Recipe", recipeSchema); 