import Rooms from "./../models/rooms.js";
import Amenities from "./../models/amenities.js";

export const getCreateRoom = async (req, res) => {
    try {
        const rooms = await Rooms.find({});
        const amenities = await Amenities.find({});
        res.render("./pages/createRoom", {
            pageTitle: "Create Room",
            breadCrumb: "Create Room",
            rooms,
            amenities,
            error: {}
        });
      } catch (error) {
        res.status(500).json(error.message);
      }
};

export const createRoom = async (req, res) => {
    try {
      await Rooms.create(req.body);
      res.render("./pages/createRoom", {
          pageTitle: "Create Room",
          breadCrumb: "Create Room",
          error: {
              status: false,
              message: "Room created"
          }
      });
    } catch (error) {
        res.render("./pages/createRoom", {
            pageTitle: "Create Room",
            breadCrumb: "Create Room",
            error: {
                status: true,
                message: error
            }
        });
    }
};

export const getRooms = async (req, res) => {
    try {
        const rooms = await Rooms.find({});
        if(rooms.length === 0){
            res.redirect('/dashboard/create-room');
        }
        res.render("./pages/rooms", {
            pageTitle: "Rooms",
            breadCrumb: "Rooms",
            rooms,
            error: {}
        });
      } catch (error) {
        res.status(500).json(error.message);
      }
};

export const deleteRoom = async (req, res) => {
    try {
        const rooms = await Rooms.findByIdAndDelete(req.params.id);
        if(rooms.length > 0){
            res.redirect('/dashboard/create-room');
        }
        res.redirect('/dashboard/rooms');
  } catch (error) {
    res.status(500).json({ status: false, error: error.message });
  }
};
