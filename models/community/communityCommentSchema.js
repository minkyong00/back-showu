import { Schema, model } from "mongoose";
import { getCurrentTime } from "../../utils/utils.js";

const communityCommentSchema = new Schema({
  postId: { type: Schema.Types.ObjectId, ref: "Community", required: true }, // 게시물 ID 참조
  user: { type: Schema.Types.ObjectId, ref: "User", required: true }, // 댓글 작성자
  content: { type: String, required: true }, // 댓글 내용
  createdAt: { type: String, default: getCurrentTime },
  updatedAt: { type: String, default: getCurrentTime },
});

export default model("CommunityComment", communityCommentSchema, "communityComments");
