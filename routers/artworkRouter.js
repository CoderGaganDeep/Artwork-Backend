//Import the Router class from express.
const { Router } = require("express");
const Artworks = require("../models/artwork");

//Create a new Router instance.
const router = new Router();

//Register a GET endpoint on the / route that sends 'separated' as the response.
// router.get("/", (request, response) => response.send(response.data));

//Get all artwork
//step1: define asyn with Route
// router.get("/", async (request, response, next) => {
//   try {
//     // strp 2: define a variable (spaces) and find all
//     const artworkRouter = await Artworks.findAll();
//     console.log(artworkRouter);
//     // step 3:  send the newly find space as a response
//     response.json(artworkRouter);
//     //ste 4: test it with httpie: http :4000/spaces
//   } catch (e) {
//     next(e);
//   }
// });

//Export the router.

module.exports = router;
