const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    rollno: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    usertype: { type: Number, default: 2, enum: [1, 2] },
    aadharCardNo: { type: String },
    mobileNo: { type: String }
});

module.exports = mongoose.model('Users', userSchema);
