import { Schema,model } from "mongoose";


const vodReportSchema=new Schema({
  user : {type: Schema.Types.ObjectId , ref : 'User'}, //신고자
  reportuser : {type: Schema.Types.ObjectId , ref : 'User'}, // 신고당한 사람
  reportComment : {type:Number,require:true}, // 신고내용
})

export default model("VodReport",vodReportSchema,"vodreport")