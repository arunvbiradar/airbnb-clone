import Countries from "./../../models/countries.js";
import Cities from "./../../models/cities.js";
import States from "./../../models/states.js";

// POST calls
// country
export const getCountires = async (req, res) => {
  try {
    const countries = await Countries.find({});
    res.status(200).json({ countries });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
// state
export const getStates = async (req, res) => {
    try {
      const states = await States.find({});
      res.status(200).json({ states });
    } catch (error) {
      res.status(500).json(error.message);
    }
};
// city
export const getCities = async (req, res) => {
    try {
      const cities = await Cities.find({});
      res.status(200).json({ cities });
    } catch (error) {
      res.status(500).json(error.message);
    }
};

// POST calls
// country
export const createCountry = async (req, res) => {
    try {
        const contry = await Countries.create(req.body);        
        res.status(200).json({ contry });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};
// state
export const createState = async (req, res) => {
    try {
        const state = await States.create(req.body);
        res.status(200).json({ state });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};
// city
export const createCity = async (req, res) => {
    try {
        const city = await Cities.create(req.body);
        res.status(200).json({ city });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

// DELETE calls
// country
export const deleteCountry = async (req, res) => {
    try {
        await Countries.findByIdAndDelete(req.params.id);
        const countries = await Countries.find({});
        res.status(200).json({ countries });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};
// state
export const deleteState = async (req, res) => {
    try {
        await States.findByIdAndDelete(req.params.id);
        const states = await States.find({});
        res.status(200).json({ states });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};
// city
export const deleteCity = async (req, res) => {
    try {
        await Cities.findByIdAndDelete(req.params.id);
        const cities = await Cities.find({});
        res.status(200).json({ cities });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

// DELETE calls
// country
export const updateCountry = async (req, res) => {
    try {
        const country = await Countries.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({ country });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};
// state
export const updateState = async (req, res) => {
    try {
        const state = await States.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({ state });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};
// city
export const updateCity = async (req, res) => {
    try {
        const city = await Cities.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({ city });
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};
    