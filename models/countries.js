import mongoose from "mongoose";

const CountriesSchema = new mongoose.Schema({
    name: {
      trim: true,
      type: String,
      unique : true,
      required: [true, "Name is required"],
      maxlength: [100, "Name can not be more than 100 characters"],
    },
    icon: {
      trim: true,
      type: String,
      default: "/uploads/default.jpg",
      required: [true, "This is required"]
    },
});

export default mongoose.model("Countries", CountriesSchema);
