import { model, Schema } from "mongoose";
import { getCurrentTime } from "../../utils/utils.js";
import mongoose from "mongoose";

const showSchema = new Schema({
  name: { type: String, required: true }, // 공연 이름
  venue: { type: String, required: true }, // 공연 장소
  dates: { type: String, required: true }, // 공연 날짜 범위
  duration: { type: String, required: true }, // 공연 시간
  grade: { type: String, required: true }, // 관람 등급
  price: {
    R: { type: String, required: true }, // R석 가격
    S: { type: String, required: true }, // S석 가격
  },
  type: { type: String, required: true }, // 공연 유형 (예: "일반예매", "추가 좌석 티켓오픈")
  discounts: [{ type: String, required: true }], // 할인 정보
  img: { type: String, required: true }, // 이미지 URL
  cast: [
    {
      name: { type: String, required: true }, // 배우 이름
      img: { type: String, required: true }, // 배우 이미지 URL
    },
  ], // 출연 배우 정보
  createdAt: { type: String, default: getCurrentTime }, // 생성 시간
  updatedAt: { type: String, default: getCurrentTime }, // 수정 시간
  detailImage: { type: String, required: true }, // 상세 이미지 URL 추가
  times: [{ type: String, required: true }], // 공연 시간 정보
  hearts: [{ type: mongoose.Types.ObjectId, ref: "Like" }],
  comments: [{ type: mongoose.Types.ObjectId, ref: "Comment" }]
});

export default model("Show", showSchema, "shows");

