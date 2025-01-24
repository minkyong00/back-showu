import { Schema, model } from "mongoose";
import { getCurrentTime } from "../../utils/utils.js";




// 통합된 스키마
const vodShowuVideoSchema = new Schema({
  title: { type: String, required: true }, // 제목
  videoUrl: { type: String, required: true }, // 비디오 경로
  description: { type: String, required: true }, // 줄거리
  likes: { type: Number, default: 0 }, // 관심 수
  likedUsers: [{ type: Schema.Types.ObjectId, ref: 'User' }], // 좋아요를 누른 사용자 ID
  time: { type: String, required: true }, // 시간 정보
  genre: { type: String, required: true }, // 장르
  year: { type: String, required: true }, // 연도
  mainImage: { type: String, required: true }, // 메인 이미지 경로
  createdAt: { type: String, default: getCurrentTime } // 생성시간
}, { timestamps: true }); // 생성 및 수정 시간 자동 

export default model("VodShowuVideo", vodShowuVideoSchema, "vodshowuvideo");
