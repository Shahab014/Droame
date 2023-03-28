const mongoose = require("mongoose");

const bookingDetailsSchema = new mongoose.Schema(
    {
        booking_id: String,
        location_id: String,
        drone_shot_id: String,
        created_time: String,
    },
);

const booking = mongoose.model("booking", bookingDetailsSchema);
module.exports = booking;

