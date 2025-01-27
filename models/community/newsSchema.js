import { model, Schema } from "mongoose";
import { getCurrentTime } from "../../utils/utils.js";

const newsSchema = new Schema({
  UserId: { type: Schema.Types.ObjectId, ref: "User" },
  newInfoId : { type: Schema.Types.ObjectId, ref: "NewsInfo" },
  title: { type: String, required: true },
  category: { type: String, enum: ["전체", "공연", "뮤지컬", "영화", "연극", "밴드"] },
  description: { type: String },
  imageUrl: { type: String, required: true },
  createdAt: { type: String, default: getCurrentTime },
  updatedAt: { type: String, default: getCurrentTime },
});

export default model("News", newsSchema, "news");
