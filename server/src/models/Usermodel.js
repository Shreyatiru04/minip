import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
    fullname: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

export const User = mongoose.model("User", userSchema);
