import { Schema, model } from "mongoose";
import { getCurrentTime } from "../../utils/utils.js";

const teamMembersSchema = new Schema({
  teamId : { type : Schema.Types.ObjectId, ref : 'TeamMatching' }, // 팀 매칭 스키마 참조
  userId : { type : Schema.Types.ObjectId, ref : 'User' }, // 유저 스키마 참조 
  applyId : { type : Schema.Types.ObjectId, ref : 'Apply' }, // 지원 스키마 참조
  joinAt : { type : String, default: getCurrentTime } // 가입한 날짜
})

export default model("TeamMembers", teamMembersSchema, "teamMembers")