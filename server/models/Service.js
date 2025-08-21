import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  duration: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  image: { type: String }  // Path to image, e.g., /images/haircut.jpg
});

export default mongoose.model("Service", serviceSchema);
