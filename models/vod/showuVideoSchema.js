import { model, Schema } from "mongoose";

const showuVideoSchema=new Schema({
  uploaduser : {type: Schema.Types.ObjectId , ref : 'User'},
  title : {type:String,require:true}, // 제목
  detail : {type:String,require:true}, // 상세 정보
  category : {type:String,enum:["음악","영화","연극","뮤지컬","전체"],require:true}, // 카테고리
  thumbnail : {type:String,require:true},// 썸네일
  videoUrl : {type:String,require:true},// 영상 경로
  videoelement : {type:Number,require:true},// 동영상 요소(자막추가)
  videoelement2 : {type:Number,require:true}, //   동영상 요소 (최종화면 추가)
  review:{type:String,require:true},// 저작권 문제
  openclose:{type:Number,default:0}// 공개 비공개

})

export default model("ShowuVideo",showuVideoSchema,"showuvideo")