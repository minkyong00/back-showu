import { Schema, model } from "mongoose";
import { getCurrentTime } from "../../utils/utils.js";

const userSchema = new Schema({
    email: { type: String, required : true, unique : true },
    password: { type: String },
    name: { type: String, required : true },
    phone : { type : String },
    provider : { type : String },
    picture : { type : String }, //프로필 이미지
    file : { type : String }, //등급업 신청 포트폴리오 파일
    role : {
        type : String,
        enum : ['user', 'export', 'admin'], 
        default : 'user'
    },
    isUpgradeRequested : {
        type : Boolean,
        default : false
    },
    upgradeRequestStatus : {
        type : String,
        enum : ['대기', '승인', '거절'],
        default : '대기'
    },
    upgradeRequestedAt : { type : Schema.Types.ObjectId, ref : 'Upgrade' },
    createdAt: { type: String, default: getCurrentTime },
    updatedAt: { type: String, default: getCurrentTime },
});

// model("객체명", 스키마, "컬렉션(테이블)명");
export default model("User", userSchema, "users");