import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    user: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "User", 
      required: true 
    },
    service: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Service", 
      required: true 
    },
    date: { 
      type: String,   // Or Date type if you want full date object
      required: true 
    },
    time: { 
      type: String, 
      required: true 
    },
    status: { 
      type: String, 
      enum: ["pending", "confirmed", "cancelled"], 
      default: "pending" 
    }
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
