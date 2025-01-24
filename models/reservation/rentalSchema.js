import mongoose from "mongoose";
import { getCurrentTime } from "../../utils/utils.js";

const rentalPeriodSchema = new mongoose.Schema({
  date: { type: Date, required: true }, // 날짜
  timeSlots: [{ type: Number, required: true }], // 시간 슬롯 (예: 8-22시)
});

const rentalSchema = new mongoose.Schema({
  spaceId: { type: mongoose.Types.ObjectId, ref: "Space", required: true }, // 공간 ID (참조)
  name: { type: String, required: true }, // 공간의 이름
  location: { type: String, required: true }, // 공간의 장소
  rentalPeriod: { type: [rentalPeriodSchema], required: true }, // 대여기간
  img: { type: String, required: true }, // 이미지
  userId: { type: mongoose.Types.ObjectId, ref: "User", required: true }, // 예약한 사용자 ID
  createdAt: { type: String, default: getCurrentTime }, // 예약 시간
});

export default mongoose.model("Rental", rentalSchema, "rentals");
