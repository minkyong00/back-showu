import { request } from "express";
import { Schema,model } from "mongoose";
import { getCurrentTime } from "../../utils/utils.js";


const vodShowuVideoInputSchema = new Schema({
  videoID : {type:Schema.Types.ObjectId,ref : 'ShowuVideo' ,request : true}, //해당 영상의 ID
  usersId :{type :Schema.Types.ObjectId, ref : 'User',request : true}, // 자신의 ID 
  myComment : {type : String,require:true}, // 내가 쓴 글
  myChoice : {type:String,require:true}, // 내가 관심을 누른 영상
  myChoicemanImage : {type:String,require:true},// 관심을 누른 영상의 썸네일 URL
  mycreatedAt: { type: String, default: getCurrentTime }, // 댓글 생성 시간
  updatedAt: { type: String, default: getCurrentTime },
})

export default model("VodInput",vodShowuVideoInputSchema,"vodinput")