import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  duration: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  image: { type: String }, // e.g. /uploads/facial.jpg
});

const Service = mongoose.models.Service || mongoose.model("Service", serviceSchema);
export default Service;
