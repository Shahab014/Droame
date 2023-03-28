const mongoose = require("mongoose");

constcustomerDetailsSchema  = new mongoose.Schema(
    {
        customer_id: String,
        customer_name: String,
        email: String,
        phone: Integer,
    },
);

const customer = mongoose.model("customer", customerDetailsSchema);
module.exports = customer;