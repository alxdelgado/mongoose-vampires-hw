// Setting up the controller. 
const express = require('express'); 

// Setting up the router. 
const router = express.Router(); 

// Require our model. 
const Lab = require ('../models/vampire');

// Create the index route. 
router.get('/', (req, res) => {
  console.log(vampire); 
  Vampire.find({}, (err, allVampire) => {
    if(err){
      res.send(err);
    } else {
      res.render('index.ejs', {
        vampire: allVampire
      })
    }
  })
});

module.exports = router; 