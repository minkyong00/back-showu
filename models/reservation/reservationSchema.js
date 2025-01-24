import { model, Schema } from "mongoose";
import { getCurrentTime } from "../../utils/utils.js";

const reservationSchema = new Schema({
  id: { type: Number, required: true }, // 고유 ID
  spaceId: { type: Schema.Types.ObjectId, ref: "Space", required: false }, // 공간 ID (참조, 옵션)
  showId: { type: Schema.Types.ObjectId, ref: "Show", required: false }, // 공연 ID (참조, 옵션)
  user: { type: Schema.Types.ObjectId, ref: "User", required: true }, // 예약자(참조, 사용자)
  reservationDate: { type: Date, required: true }, // 예약 날짜
  reservationTime: { type: String, required: true }, // 예약 시간
  totalAmount: { type: Number, required: true }, // 총 금액
  discountsApplied: [{ type: String }], // 적용된 할인 정보
  createdAt: { type: String, default: getCurrentTime }, // 생성 시간
  updatedAt: { type: String, default: getCurrentTime }, // 수정 시간
});

export default model("Reservation", reservationSchema, "reservations");
