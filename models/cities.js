import mongoose from "mongoose";

const CitiesSchema = new mongoose.Schema({
    name: {
      trim: true,
      type: String,
      required: [true, "Name is required"],
      unique : [true, "City already exist in database"],
      maxlength: [100, "Name can not be more than 100 characters"],
    },
    country: {
      ref: "Country",
      required: true,
      type: mongoose.Schema.ObjectId,
    },
    state: {
      ref: "State",
      required: true,
      type: mongoose.Schema.ObjectId,
    },
    icon: {
      trim: true,
      type: String,
      default: "/uploads/default.jpg",
      required: [true, "This is required"]
    }
});

export default mongoose.model("Cities", CitiesSchema);
