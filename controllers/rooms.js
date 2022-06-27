import Room from "./../models/rooms.js";

export const getRooms = async (req, res) => {
  try {
    const rooms = await Room.find({});
    res.status(200).json({ rooms });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getaRoom = (req, res) => {
  res.status(200).send("This is a route for a single room");
};

export const createRoom = async (req, res) => {
  try {
    const room = await Room.create(req.body);
    res.status(200).json({ room });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
