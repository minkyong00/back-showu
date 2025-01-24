import { model, Schema } from "mongoose";
import { getCurrentTime } from "../../utils/utils.js";

const dateAvailabilitySchema = new Schema({
  spaceId: { type: Schema.Types.ObjectId, ref: "Space", required: false }, // 공간 ID (참조, 옵션)
  showId: { type: Schema.Types.ObjectId, ref: "Show", required: false }, // 공연 ID (참조, 옵션)
  date: { type: Date, required: true }, // 예약 가능한 날짜
  availableTimes: [{ type: String, required: true }], // 예약 가능한 시간 목록 (예: "07:00-08:00")
  createdAt: { type: String, default: getCurrentTime }, // 생성 시간
  updatedAt: { type: String, default: getCurrentTime }, // 수정 시간
});

export default model( "DateAvailability", dateAvailabilitySchema, "dateAvailability");
