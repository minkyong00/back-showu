import { model, Schema } from "mongoose"
import { getCurrentTime } from "../../utils/utils.js";

const inquiryListSchema = new Schema({
  mdInquiryId: { type: Schema.Types.ObjectId, ref: 'Md' }, // MD 상품Id 참조
  auctionInquiryId: { type: Schema.Types.ObjectId, ref: 'Auction' }, // 경매 상품Id 참조
  title: { type: String, required: true },
  type: { type: String, enum: ["상품", "배송", "기타"], required: true }, // 문의 유형 (상품, 배송, 기타)
  form: { type: String, enum: ["공개", "비공개"], required: true }, // 문의 형식 (공개, 비공개)
  writer: { type: Schema.Types.ObjectId, ref: 'User' }, // 작성자
  content: { type: String, required: true }, // 문의 내용 
  createdAt: { type: String, default: getCurrentTime }, // 작성일
  updatedAt: { type: String, default: getCurrentTime }, // 수정/삭제일
});


export default model("InquiryList", inquiryListSchema, "inquiryList");