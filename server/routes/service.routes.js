import express from "express";
import { createService, getAllServices, getServiceById } from "../controllers/service.controller.js";

const router = express.Router();

// Routes
router.post("/", createService);          // Create service
router.get("/", getAllServices);          // Get all services
router.get("/:id", getServiceById);       // Get service by ID

export default router;
