const Vehicle = require("../models/Vehicle");

const AllVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.status(200).json({ vehicles });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getVehicle = async (req, res) => {
  try {
    const { id } = req.params;
    const vehicle = await Vehicle.findById(id);
    if (!vehicle) {
      res.status(400).send("Vehicle with this id could not be found");
    }
    res.status(200).json({ vehicle });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createVehicle = async (req, res) => {
  try {
    const {
      vehicleBrand,
      vehicleModel,
      price,
      quantity,
      description,
    } = req.body;

    if (!vehicleBrand || !vehicleModel) {
      return res.status(400).json({ message: "Please provide all info." });
    }

    const vehicle = await Vehicle.create({
      vehicleBrand,
      vehicleModel,
      price,
      quantity,
      description,
    });
    res.status(201).json({ vehicle });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateVehicle = async (req, res) => {
  try {
    const { id } = req.params;
    const vehicle = await Vehicle.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({ vehicle });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteVehicle = async (req, res) => {
  try {
    const { id } = req.params;
    await Vehicle.findByIdAndDelete(id);
    res.status(204).json({ message: "Vehicle deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  AllVehicles,
  getVehicle,
  createVehicle,
  updateVehicle,
  deleteVehicle,
};
