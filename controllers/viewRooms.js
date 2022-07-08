import Rooms from "./../models/rooms.js";
import Amenities from "./../models/amenities.js";
import Countries from "./../models/countries.js";
import Cities from "./../models/cities.js";
import States from "./../models/states.js";

export const getCreateRoom = async (req, res) => {
    try {
        const rooms = await Rooms.find({});
        const amenities = await Amenities.find({});
        const countries = await Countries.find({});
        const cities = await Cities.find({});
        const states = await States.find({});
        res.render("./pages/createRoom", {
            pageTitle: "Create Room",
            breadCrumb: "Create Room",
            rooms,
            amenities,
            countries,
            states,
            cities,
            error: {}
        });
      } catch (error) {
        res.status(500).json(error.message);
      }
};

export const createRoom = async (req, res) => {
    try {
      await Rooms.create(req.body);
      res.redirect('/dashboard/create-room');
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

export const getEditRoom = async (req, res) => {
    try {
      const room = await Rooms.findById(req.params.id)
      const amenities = await Amenities.find({});
      const countries = await Countries.find({});
      const cities = await Cities.find({});
      const states = await States.find({});
      res.render("./pages/editRoom", {
          pageTitle: "Edit Room",
          breadCrumb: "Edit Room",
          room,
          amenities,
          countries,
          states,
          cities,
          error: {}
      });
    } catch (error) {
        res.render("./pages/editRoom", {
            pageTitle: "Edit Room",
            breadCrumb: "Edit Room",
            error: {
                status: true,
                message: error
            }
        });
    }
};

export const updateRoom = async (req, res) => {
    console.log(req.params.id);
    try {
      await Rooms.findByIdAndUpdate(req.params.id, req.body);
      res.redirect('/dashboard/rooms');
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
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
