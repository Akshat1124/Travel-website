const mongoose = require('mongoose');

const tourSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    destination: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: Number, required: true }, // Duration in days
    image: { type: String, required: true }, // URL to an image
  },
  {
    timestamps: true,
  }
);

const Tour = mongoose.model('Tour', tourSchema);
module.exports = Tour;
