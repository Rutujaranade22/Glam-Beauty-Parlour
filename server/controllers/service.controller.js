   import Service from "../models/Service.js";

export const createService = async (req, res) => {
  try {
    const { name, duration, price, description, image } = req.body;
    const service = new Service({ name, duration, price, description, image });
    await service.save();
    res.status(201).json({ msg: "Service created successfully", service });
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};

export const getServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.json({ services });
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};

export const getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) return res.status(404).json({ msg: "Service not found" });
    res.json(service);
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
}
