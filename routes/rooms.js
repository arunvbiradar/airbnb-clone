import express from "express";
const router = express.Router();

import { getRooms, getaRoom, createRoom } from "./../controllers/rooms.js";

router.route("/").get(getRooms).post(createRoom);
router.route("/:id").get(getaRoom);

export default router;
