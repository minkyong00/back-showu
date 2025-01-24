import { model, Schema } from "mongoose";
import { getCurrentTime } from "../../utils/utils.js";


const spaceSchema = new Schema({
  name: { type: String, required: true }, // 공간 이름
  location: { type: String, required: true }, // 위치
  price: { type: String, required: true }, // 가격
  pricePerHour: { type: Number, required: true }, // 시간당 가격
  pricePerDay: { type: Number, required: true }, // 하루당 가격
  img: { type: String, required: true }, // 이미지 URL
  descriptions: [{ type: String, required: true }], // 설명 배열
  amenities: [{ type: String, required: true }], // 편의 시설 배열
  icons: [
    {
      name: { type: String, required: true }, // 아이콘 이름
      icon: { type: String, required: true }, // 아이콘 이미지 URL
    },
  ], // 아이콘 배열
  additionalImages: [{ type: String, required: true }], // 추가 이미지 배열
  createdAt: { type: String, default: getCurrentTime }, // 생성 시간
  updatedAt: { type: String, default: getCurrentTime }, // 수정 시간
});

export default model("Space", spaceSchema, "spaces");

