import { model, Schema } from "mongoose";

const mdCartSchema = new Schema({
  UserId: { type: Schema.Types.ObjectId, ref: 'User', required: true },  
  mdName: { type: String, required: true }, // 상품명
  price: { type: Number, required: true },  
  options: [{ type: Schema.Types.ObjectId, ref: 'Option' }], // 상품 옵션 (배열)
  quantity: { type: Number, required: true, default: 1 }, 
  image: { type: String, required: true },  
});

export default model("MdCart", mdCartSchema, "mdCart");