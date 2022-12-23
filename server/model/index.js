import mongoose from "mongoose";

const travelSchema = mongoose.Schema({
  img: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  star: {
    type: String,
  },
  numberReview: {
    type: Number,
  },
  address: {
    type: String,
  },
  price: {
    type: Number,
  },
  bookHotel: {
    type: Boolean,
  },
});
const travelModel = mongoose.model("Travel", travelSchema);

export default travelModel;
