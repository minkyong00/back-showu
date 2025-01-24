import { model, Schema } from "mongoose";
import { getCurrentTime } from "../../utils/utils.js";


const ticketEventSchema = new Schema({
  name: { type: String, required: true }, // 이벤트 이름
  date: { type: String, required: true }, // 이벤트 날짜
  type: { type: String, required: true }, // 이벤트 유형 (예: "일반예매")
  img: { type: String, required: true }, // 이미지 URL
  createdAt: { type: String, default: getCurrentTime }, // 생성 시간
  updatedAt: { type: String, default: getCurrentTime }, // 수정 시간
});

export default model("TicketEvent", ticketEventSchema, "ticketEvents");
