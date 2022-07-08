import express from "express";
const router = express.Router();

import { getRooms, getaRoom, createRoom, updateRoom, deleteRoom } from "./../../controllers/apis/rooms.js";
import { getCountires, createCountry, updateCountry, deleteCountry, getCities, createCity, updateCity, deleteCity, getStates, createState, updateState, deleteState } from "./../../controllers/apis/countries.js";
import { getAmenities, createAmenity, deleteAmenity, updateAmenity } from "./../../controllers/apis/amenities.js";

router.route("/rooms").get(getRooms).post(createRoom);
router.route("/rooms/:id").get(getaRoom).put(updateRoom).delete(deleteRoom);

// amenities
router.route('/amenities').get(getAmenities).post(createAmenity);
router.route('/amenities/:id').put(updateAmenity).delete(deleteAmenity);

// Counties, States & Cities
router.route('/countries').get(getCountires).post(createCountry);
router.route('/countries/:id').delete(deleteCountry).put(updateCountry);
router.route('/states').get(getStates).post(createState);
router.route('/states/:id').delete(deleteState).put(updateState);
router.route('/cities').get(getCities).post(createCity);
router.route('/cities/:id').delete(deleteCity).put(updateCity);

export default router;