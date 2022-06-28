//Import the Router class from express.
const { Router } = require("express");
const Artwork = require("../models").artwork;
const Bid = require("../models").bid;
const authMiddleware = require("../auth/middleware");

//Create a new Router instance.
const router = new Router();

//Register a GET endpoint on the / route that sends 'separated' as the response.
// router.get("/", (request, response) => response.send(response.data));

// http -v POST :4000/bids email=a@a.com amount=4 artworkId=1 Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTY1NjIyNTI1NSwiZXhwIjoxNjU2MjMyNDU1fQ.j2GcnZ13c7U7_a3IC5gDOxy5_86gJL_pDFu9TmWL_rM"
router.post("/", authMiddleware, async (request, response, next) => {
  try {
    const { email, amount, artworkId } = request.body;

    const artworksByIdSelector = await Artwork.findByPk(artworkId, {
      include: [Bid],
    });

    let minCurrentBid = 0;

    // check no bids
    // code from : https://www.google.com/search?q=check+empty+property+javascript+if&oq=check+empty+property+javascript+if&aqs=chrome..69i57j0i22i30j0i390.16224j0j7&sourceid=chrome&ie=UTF-8
    if (Object.keys(artworksByIdSelector.bids).length === 0) {
      minCurrentBid = artworksByIdSelector.minimumBid;
    } else {
      artworksByIdSelector.bids.map((bid) => {
        return minCurrentBid < bid.amount
          ? (minCurrentBid = bid.amount)
          : bid.amount;
      });
    }

    if (amount < minCurrentBid + 1) {
      response.status(400);
      response.send("Bad request : Bid should be Highest");
      return;
    }

    const newBid = await Bid.create({
      email,
      amount,
      artworkId,
    });
    response.send(newBid);
  } catch (error) {
    console.log("error from bid router: ", error.message);
    next(error);
  }
});

//Export the router.

module.exports = router;
