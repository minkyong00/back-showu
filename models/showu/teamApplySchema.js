import { Schema, model } from "mongoose";
import { getCurrentTime } from "../../utils/utils.js";

const teamApplySchema = new Schema({
  teamId : { type : Schema.Types.ObjectId, ref : 'TeamMatching' },
  applyId : { type : Schema.Types.ObjectId, ref : 'User' }, //지원한 유저아이디 참조
  upgradeId : { type : Schema.Types.ObjectId, ref : 'Upgrade' },
  teamName : { type : String },
  intro : { type : String },
  career : { type : String },
  portfilo : { type : String },
  isApplyStatus : { type : Boolean },
  applyStatus : { type : String , enum : ['대기', '승인', '거절'], default : '대기'}
})

export default model("TeamApply", teamApplySchema, "teamApply")