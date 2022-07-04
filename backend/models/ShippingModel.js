import mongoose from "mongoose";

const shippingSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    address: { type: String, required: true }, 
    city: { type: String, required: true },
    postCode: { type: String, required: true},
    country: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const Shipping = mongoose.model("Shipping", shippingSchema);

export default Shipping;
