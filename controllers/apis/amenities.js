import Amenities from "./../../models/amenities.js";

export const getAmenities = async (req, res) => {
  try {
    const amenities = await Amenities.find({});
    res.render("./pages/amenities", {
        pageTitle: "Amenities",
        breadCrumb: "Amenities",
        amenities,
        error: {}
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const createAmenity = async (req, res) => {
  try {
    const amenities = await Amenities.create(req.body);
    res.redirect('/dashboard/amenities');
  } catch (error) {
    res.status(500).json({ status: false, error: error.message });
  }
};

export const deleteAmenity = async (req, res) => {
    try {
        await Amenities.findByIdAndDelete(req.params.id);
        res.redirect('/dashboard/amenities');
  } catch (error) {
    res.status(500).json({ status: false, error: error.message });
  }
};
