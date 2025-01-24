import { model, Schema } from "mongoose";
import { getCurrentTime } from "../../utils/utils.js";


const auditionSchema = new Schema({
    title: { type: String, required: true }, 
    category: { type: String, required: false, enum: ["전체", "뮤지컬", "연극"] }, // 카테고리
    description: { type: String, required: false }, 
    imageUrl: { type: String, required: true }, // 이미지 URL
    createdAt: { type: String, default: getCurrentTime }, 
    updatedAt: { type: String, default: getCurrentTime },  
    // infoId: { type: Schema.Types.ObjectId, ref: "AuditionInfo" } // AuditionInfo 참조

});

export default model("Audition", auditionSchema, "audition");