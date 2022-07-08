import express from "express";
const router = express.Router();
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


export default router;
