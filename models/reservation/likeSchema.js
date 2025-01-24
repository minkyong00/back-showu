import { model, Schema } from "mongoose";
import { getCurrentTime } from "../../utils/utils.js";

const likeSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true }, // 사용자 ID (참조)
  spaceId: { type: Schema.Types.ObjectId, ref: "Space", required: false }, // 공간 ID (참조, 옵션)
  showId: { type: Schema.Types.ObjectId, ref: "Show", required: false }, // 공연 ID (참조, 옵션)
  createdAt: { type: String, default: getCurrentTime }, // 좋아요 누른 시간
});

export default model("Like", likeSchema, "likes");
