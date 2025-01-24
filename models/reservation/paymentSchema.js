import { model, Schema } from "mongoose";
import { getCurrentTime } from "../../utils/utils.js";

const paymentSchema = new Schema({
  id: { type: Number, required: true }, // 고유 ID
  reservationId: {
    type: Schema.Types.ObjectId,
    ref: "Reservation",
    required: true,
  }, // 예약 ID (참조)
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true }, // 사용자 ID (참조)
  amount: { type: Number, required: true }, // 결제 금액
  status: { type: String, required: true }, // 결제 상태 (예: "완료", "취소")
  paymentMethod: { type: String, required: true }, // 결제 방법 (예: "토스", "카드")
  transactionId: { type: String, required: true }, // 거래 ID
  createdAt: { type: String, default: getCurrentTime }, // 생성 시간
  updatedAt: { type: String, default: getCurrentTime }, // 수정 시간
});

export default model("Payment", paymentSchema, "payments");
