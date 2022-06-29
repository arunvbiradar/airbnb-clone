import mongoose from "mongoose";

const AmenitiesSchema = new mongoose.Schema({
    name: {
      trim: true,
      type: String,
      required: [true, "Name is required"],
      maxlength: [100, "Name can not be more than 100 characters"],
    },
    icon: {
      trim: true,
      type: [String],
      default: "/uploads/default.jpg",
      required: [true, "Atleast one image is required"],
    },
});

export default mongoose.model("Amenities", AmenitiesSchema);
