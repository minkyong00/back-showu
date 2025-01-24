import { Schema, model } from 'mongoose';

const adminSchema = new Schema({
    email: { type: String, required : true, unique : true },
    password: { type: String, required : true },
    provider: { type: String, default: null }, // null이면 소셜 로그인 불가
    role: { type: String, default: "admin" }
});

export default model("Admin", adminSchema, "admin");