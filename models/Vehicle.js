const { Schema, model } = require("mongoose");

const vehicleSchema = new Schema(
  {
    vehicleBrand: {
      type: String,
      required: [true, "Please provide the vehicle brand"],
    },

    vehicleModel: {
      type: String,
      required: [true, "Please provide the vehicle model"],
    },
    price: {
      type: Number,
      required: [true, "Please provide the price"],
    },
    quantity: {
      type: Number,
      default: 0,
    },
    description: {
      type: String,
      required: [true, "Please provide details about the vehicle."],
    },
  },
  { timestamps: true }
);

module.exports = model("Vehicle", vehicleSchema);
