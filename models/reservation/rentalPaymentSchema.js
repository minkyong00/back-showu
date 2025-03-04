import mongoose from "mongoose";
import { getCurrentTime } from "../../utils/utils.js";

const rentalPeriodSchema = new mongoose.Schema({
  date: { type: Date, required: true }, // 날짜
  timeSlots: [{ type: Number, required: true }], // 시간 슬롯 (예: 8-22시)
});

const rentalPaymentSchema = new mongoose.Schema({
  spaceId: { type: mongoose.Types.ObjectId, ref: "Space", required: true }, // 공간 ID (참조)
  userId: { type: mongoose.Types.ObjectId, ref: "User", required: true }, // 결제한 사용자 ID
  orderId: { type: String, required: true }, // 주문 ID
  paymentKey: { type: String, required: true }, // 결제 키
  amount: { type: Number, required: true }, // 결제 금액
  orderName: { type: String, required: true }, // 결제 이름 (예: 공간 대여 결제)
  spaceLocation: { type: String, required: true }, // 공간의 장소
  rentalPeriod: { type: [rentalPeriodSchema], required: true }, // 대여 기간
  status: { type: String, default: "success" }, // 결제 상태
  createdAt: { type: String, default: getCurrentTime }, // 결제 생성 시간
});

export default mongoose.model( "RentalPayment", rentalPaymentSchema, "rentalPayments");
