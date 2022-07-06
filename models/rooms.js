import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema({
  name: {
    trim: true,
    type: String,
    required: [true, "Name is required"],
    maxlength: [100, "Name can not be more than 100 characters"],
  },
  title: {
    trim: true,
    type: String,
    required: [true, "Title is required"],
  },
  address: {
    type: String,
    required: [true, "Address is required"],
  },
  pincode: {
    type: String,
    required: [true, "Pincode is required"],
  },
  imgUrl: {
    trim: true,
    type: [String],
    required: [true, "Atleast one image is required"],
  },
  noOfGuests: {
    type: Number,
    required: [true, "Number of Guests is required"],
  },
  noOfBedrooms: {
    type: Number,
  },
  noOfBathrooms: {
    type: Number,
  },
  
  petsAllowed: {
    type: Boolean,
    default: false,
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
  serviceFee: {
    type: Number,
    required: [true, "Service fee is required"],
  },
  checkIn: {
    type: String,
    required: [true, "Check In is required"],
  },
  checkOut: {
    type: String,
    required: [true, "Check Out is required"],
  },
  description: {
    type: String,
    trim: true,
  },
  amenites: [String],
  
  location: {
    type: { type: String },
    coordinates: [],
  },
  rules: {
    type: {
      checkInBetween: String,
      suitableFor: String,
      smoking: {
        type: Boolean,
        default: false,
      },
    },
    additional: [String],
  },
  safety: [String],
  policy: String,
});

export default mongoose.model("Room", RoomSchema);
