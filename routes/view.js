import express from "express";
const router = express.Router();
import { getAmenities, createAmenity, deleteAmenity } from "./../controllers/amenities.js";
import { getCreateRoom, createRoom } from "./../controllers/viewRooms.js";

router.get("/", (req, res) => {
  res.render("index", {
    pageTitle: "Dashboard",
    breadCrumb: "Dashboard",
  });
});

// rooms
router.route("/create-room").get(getCreateRoom).post(createRoom);

// amenities
router.route('/amenities').get(getAmenities).post(createAmenity);
router.route('/amenities/:id').post(deleteAmenity);


export default router;
