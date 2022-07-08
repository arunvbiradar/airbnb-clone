import Room from "./../../models/rooms.js";

// get all rooms
export const getRooms = async (req, res) => {
  try {
    const rooms = await Room.find({});
    res.status(200).json({ rooms });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
// get single room
export const getaRoom = async(req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    res.status(200).json({ room });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
// create room
export const createRoom = async (req, res) => {
  try {
    const rooms = await Room.create(req.body);
    res.status(200).json({ rooms });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
// update room
export const updateRoom = async(req, res) => {
  try {
    const room = await Room.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ room });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
// delete room
export const deleteRoom = async(req, res) => {
  try {
    await Room.findByIdAndDelete(req.params.id);
    const rooms = await Room.find({});
    res.status(200).json({ rooms });
  } catch (error) {
    res.status(500).json(error.message);
  }
};