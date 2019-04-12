const mongoose = require('mongoose');
const Recipe = require('./Recipe.js');
const data = require('./data.js');

/* Schema is in Recipe.js */
/* Connecting to Mongodb with the name recipeApp */
 mongoose.connect('mongodb://localhost/recipeApp', { useNewUrlParser: true })
  .then(() => {	 
    console.log('Connected to Mongo!');	    
  })
  .catch(err => {
    console.error('Error connecting to mongo', err);	    
  });	  

  /* Creating a new recipe based on the schema from Recipe.js */
 Recipe.create({
  title: "Garden Stuffed Baked Potatoes",
  level: "Amateur Chef",
  ingredients: [
    "4 large potatoes",
    "2 tablespoons butter",
    "1 small onion, chopped",
    "1 (10 ounce) package chopped frozen broccoli, thawed",
    "1/2 cup ranch-style salad dressing",
    "1 tablespoon vegetable oil",
    "2 teaspoons dried parsley",
    "salt and pepper to taste",
  ],
  cuisine: "American",
  dishType: "Breakfast",
  image: "hhttps://images.media-allrecipes.com/userphotos/560x315/450020.jpg",
  duration: 60,
  creator: "Thor" 
  })
  .then(receta => {
    console.log('Nueva receta:', receta.title);
  })
  .catch(err => {
    console.log('Error al crear nueva receta', err);
  });
  
  /* Creating many */
 Recipe.insertMany(data)
  .then(recetas => {
  console.log('Recetas importadas desde data.js');
  recetas.map(receta => receta.title).forEach(title => {
      console.log('Receta importada:', title);
    })
  })
  .catch(err => {
    console.log('Error al importar recetas de data.js', err);
  }); 

  /* Updates one */
 Recipe.updateOne(
  { title: "Chocolate Chip Cookies" },
  { $set: { duration: 45 }}
  )
  .then(() => {
    console.log('Chocolate Chip Cookies ha sido modificada');
  })
  .catch(err => {
    console.log('Error, Chocolate Chip Cookies', err);
  });

  /* Deletes one */
 Recipe.deleteOne(
  {title: "Asian Glazed Chicken Thighs"}
  )
  .then(() => {
    console.log('Asian Glazed Chicken Thighs ha sido eliminada');
  })
  .catch(err => {
    console.log('Error, Asian Glazed Chicken Thighs', err);
  })
  /* CLOESES THE CONNECTION */
  .then(()=>{
 mongoose.connection.close()
  .then(() => {
    console.log('Disconnected to Mongo!');
  })
  .catch(err => {
    console.error('Error disconnecting to mongo', err);
  }); 
})