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
  city: {
    ref: "City",
    required: true,
    type: mongoose.Schema.ObjectId,
  },
  imgUrl: {
    trim: true,
    type: [String],
    default: "/uploads/default.jpg",
    required: [true, "Atleast one image is required"],
  },
  noOfGuests: {
    default: 1,
    type: Number,
    required: [true, "Number of Guests is required"],
  },
  noOfBedrooms: {
    default: 1,
    type: Number,
  },
  noOfBathrooms: {
    default: 0,
    type: Number,
  },
  host: {
    ref: "Host",
    required: true,
    type: mongoose.Schema.ObjectId,
  },
  petsAllowed: {
    type: Boolean,
    default: false,
  },
  price: {
    default: 0,
    type: Number,
    required: [true, "Price is required"],
  },
  serviceFee: {
    default: 0,
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
  reviews: {
    ref: "Reviews",
    required: true,
    type: mongoose.Schema.ObjectId,
  },
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
