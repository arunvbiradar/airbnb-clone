import express from "express";
import { getCountires, createCountry, deleteCountry, createCity, deleteCity, createState, deleteState } from "../controllers/countries.js";
const router = express.Router();
import { getAmenities, createAmenity, deleteAmenity } from "./../controllers/amenities.js";
import { getCreateRoom, createRoom, getRooms, deleteRoom, getEditRoom, updateRoom } from "./../controllers/viewRooms.js";

router.get("/", (req, res) => {
  res.render("index", {
    pageTitle: "Dashboard",
    breadCrumb: "Dashboard",
    error: {}
  });
});

// rooms
router.route("/rooms").get(getRooms);
router.route("/rooms/:id").post(deleteRoom).get(getEditRoom);
router.route("/updateRoom").get((req, res) => {
  console.log('object');
});
router.route("/updateRoom/:id").post(updateRoom);
router.route("/create-room").get(getCreateRoom).post(createRoom);

// amenities
router.route('/amenities').get(getAmenities).post(createAmenity);
router.route('/amenities/:id').post(deleteAmenity);

// Counties, States & Cities
router.route('/countries').get(getCountires).post(createCountry);
router.route('/countries/:id').post(deleteCountry);
router.route('/states').post(createState);
router.route('/states/:id').post(deleteState);
router.route('/cities').post(createCity);
router.route('/cities/:id').post(deleteCity);


export default router;
