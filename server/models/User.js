import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        img: {
            type: String
        },
        password: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        respect:{
            type: Number,
            default: 0
        },
        posts:{
            type: [String]
        }
    },
    { timestamps: true }
);

export default mongoose.model("User", UserSchema);