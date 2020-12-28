const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema(
    {
        userName: {
            type: String,
            required: true,
            min: 4,
            max: 255,
            unique: true
        },
        firstName: {
            type: String,
            required: true,
            min: 4,
            max: 255,
        },
        lastName: {
            type: String,
            min: 4,
            max: 255,
        },
        createdAt: {
            type: String,
            default: new Date().toLocaleString(),
        },
        updatedAt: {
            type: String,
            default: new Date().toLocaleString(),
        },
        isActive: {
            type: Boolean,
            default: true,
        },

    },
    { versionKey: false }
);

module.exports = mongoose.model('userDetail', UserSchema);