import Rooms from "./../models/rooms.js";

export const getCreateRoom = async (req, res) => {
    try {
        const rooms = await Rooms.find({});
        res.render("./pages/createRoom", {
            pageTitle: "Create Room",
            breadCrumb: "Create Room",
            rooms,
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
        console.log(error);
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