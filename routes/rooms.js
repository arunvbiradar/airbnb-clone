import express from "express";
const router = express.Router();

import { getRooms, getaRoom } from "./../controllers/rooms.js";

router.route("/").get(getRooms);
router.route("/:id").get(getaRoom);

export default router;
