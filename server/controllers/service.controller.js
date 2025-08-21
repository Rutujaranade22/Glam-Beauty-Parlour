import Service from "../models/Service.js";

// Create a new service
const createService = async (req, res) => {
  try {
    const { name, duration, price, description, image } = req.body;

    if (!name || !duration || !price) {
      return res.status(400).json({ message: "Name, duration, and price are required" });
    }

    const service = new Service({
      name,
      duration,
      price,
      description: description || "",
      image: image || "/images/default.jpg" // default if not provided
    });

    const savedService = await service.save();
    res.status(201).json({ message: "Service created successfully", data: savedService });
  } catch (err) {
    res.status(500).json({ message: "Error creating service", error: err.message });
  }
};

// Get all services
const getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json({ services });
  } catch (err) {
    res.status(500).json({ message: "Error fetching services", error: err.message });
  }
};

// Get single service by ID
const getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) return res.status(404).json({ message: "Service not found" });
    res.status(200).json({ data: service });
  } catch (err) {
    res.status(500).json({ message: "Error fetching service", error: err.message });
  }
};

export { createService, getAllServices, getServiceById };
