import { model, Schema } from "mongoose";
import { getCurrentTime } from "../../utils/utils.js";

const commentSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true }, // 사용자 ID (참조)
  showId: { type: Schema.Types.ObjectId, ref: "Show", required: true }, // 공연 ID (참조)
  text: { type: String, required: true }, // 댓글 내용
  createdAt: { type: String, default: getCurrentTime }, // 댓글 작성 시간
  updatedAt: { type: String, default: getCurrentTime }, // 댓글 수정 시간
});

export default model("Comment", commentSchema, "comments");
