//Import the Router class from express.
const { Router } = require("express");
const Artwork = require("../models").artwork;
const Bid = require("../models").bid;
const authMiddleware = require("../auth/middleware");

//Create a new Router instance.
const router = new Router();

//Register a GET endpoint on the / route that sends 'separated' as the response.
// router.get("/", (request, response) => response.send(response.data));

//Get all artwork
//step1: define asyn with Route
router.get("/", async (request, response, next) => {
  try {
    // strp 2: define a variable (spaces) and find all
    const allArtworks = await Artwork.findAll();
    console.log(allArtworks);
    // step 3:  send the newly find space as a response
    response.send(allArtworks);
    //ste 4: test it with httpie: http :4000/spaces
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (request, response, next) => {
  try {
    const { id } = request.params;
    const artworkbyId = await Artwork.findByPk(id, { include: [Bid] });
    response.send(artworkbyId);
  } catch (error) {
    console.log("error from artwork by id: ", error.message);
    next(error);
  }
});

router.patch("/:id", async (request, response, next) => {
  try {
    const { id } = request.params; // receive the artwork id from the thunk
    const { hearts } = request.body;

    console.log("error from heart:  = ", request.body.hearts);

    Artwork.update(
      { hearts: request.body.hearts },
      { where: request.params.id }
    );

    const artwork = await Artwork.findByPk(id);

    // const artworkUpdated = await artwork.update({
    //   hearts: hearts,
    // });
    response.send(artwork);
  } catch (error) {
    console.log("error from Updating my Artwork endPoint: ", error.message);
    next(error);
  }
});

//Export the router.

module.exports = router;
