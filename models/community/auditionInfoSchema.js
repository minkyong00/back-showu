import { model, Schema } from "mongoose";
import { getCurrentTime } from "../../utils/utils.js";


const auditionInfoSchema = new Schema({
    title: { type: String, required: true }, 
    imageUrl: { type: String, required: true }, // 이미지 URL
    createdAt: { type: String, default: getCurrentTime }, 
    updatedAt: { type: String, default: getCurrentTime },
    // auditionId: { type: Schema.Types.ObjectId, ref: "Audition" } // Audition 참조


});

export default model("AuditionInfo", auditionInfoSchema, "auditionInfo");