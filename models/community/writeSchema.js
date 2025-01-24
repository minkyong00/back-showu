import { Schema, model } from "mongoose";


const writeSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  category: { 
    type: String, 
    enum: ["전체", "뮤지컬", "공연", "영화", "밴드", "연극"], 
    required: true 
  },
  content: { type: String, required: true },
  writeFile: { type: String }, // 첨부 파일 URL 저장
  createdAt: { type: Date, default: Date.now },
});


export default model("Write", writeSchema, "writes");