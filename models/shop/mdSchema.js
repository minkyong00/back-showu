import { model, Schema } from "mongoose";

const mdSchema = new Schema({
  UserId: { type: Schema.Types.ObjectId, ref: "User" }, 
  mdName: { type: String, required: true }, // 상품명
  category: { type: String, enum: ["전체", "뮤지컬", "영화", "연극"], required: false }, // 카테고리
  price: { type: Number, required: false }, // 상품 가격
  options: [{ type: Schema.Types.ObjectId, ref: 'Option' }], // 상품 옵션 (배열)
  isHearted: { type: Schema.Types.ObjectId, ref: 'User' }, // 찜
  image: { type: String, required: false },
  imageDetail: { type: String, required: false },
});

export default model("Md", mdSchema, "md");