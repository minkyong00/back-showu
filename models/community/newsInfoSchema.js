import { model, Schema } from "mongoose";
import { getCurrentTime } from "../../utils/utils.js";

const newsInfoSchema = new Schema({
    // postId: {type: Schema.Types.ObjectId, ref: "News", required: false},
    title:{type:String, required:true},
    content: { type: String, required: true },
    imageUrl: { type: String, required: true },
    createdAt: { type: String, default: getCurrentTime },
    updatedAt: { type: String, default: getCurrentTime }
});

export default model("NewsInfo", newsInfoSchema, "newsInfo");
