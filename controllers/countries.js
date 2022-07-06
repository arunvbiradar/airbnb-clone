import Countries from "./../models/countries.js";
import Cities from "./../models/cities.js";
import States from "./../models/states.js";

export const getCountires = async (req, res) => {
  try {
    const countries = await Countries.find({});
    const cities = await Cities.find({});
    const states = await States.find({});
    res.render("./pages/countries", {
        pageTitle: "Countries",
        breadCrumb: "Countries",
        countries,
        cities,
        states,
        error: {}
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
  
export const createCountry = async (req, res) => {
    try {
        await Countries.create(req.body);
        res.redirect('/dashboard/countries');
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};
  
export const createState = async (req, res) => {
    try {
        await States.create(req.body);
        res.redirect('/dashboard/countries');
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};
  
export const createCity = async (req, res) => {
    try {
        await Cities.create(req.body);
        res.redirect('/dashboard/countries');
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

export const deleteCountry = async (req, res) => {
    try {
        await Countries.findByIdAndDelete(req.params.id);
        res.redirect('/dashboard/countries');
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

export const deleteState = async (req, res) => {
    try {
        await States.findByIdAndDelete(req.params.id);
        res.redirect('/dashboard/countries');
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};

export const deleteCity = async (req, res) => {
    try {
        await Cities.findByIdAndDelete(req.params.id);
        res.redirect('/dashboard/countries');
    } catch (error) {
        res.status(500).json({ status: false, error: error.message });
    }
};
    