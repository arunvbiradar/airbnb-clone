import Amenities from "./../../models/amenities.js";

export const getAmenities = async (req, res) => {
  try {
    const amenities = await Amenities.find({});
    res.status(200).json({ amenities });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const createAmenity = async (req, res) => {
  try {
    const amenity = await Amenities.create(req.body);
    res.status(200).json({ amenity });
  } catch (error) {
    res.status(500).json({ status: false, error: error.message });
  }
};

export const deleteAmenity = async (req, res) => {
  try {
    await Amenities.findByIdAndDelete(req.params.id);
    const amenities = await Amenities.find({});
    res.status(200).json({ amenities });
  } catch (error) {
    res.status(500).json({ status: false, error: error.message });
  }
};

export const updateAmenity = async (req, res) => {
  try {
    const amenity = await Amenities.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ amenity });
  } catch (error) {
    res.status(500).json({ status: false, error: error.message });
  }
};
