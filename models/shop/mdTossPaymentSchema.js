import mongoose from "mongoose";
import { getCurrentTime } from "../../utils/utils.js";

const mdTossSchema = new mongoose.Schema({
  productId: { type: mongoose.Types.ObjectId, ref: "Product", required: true }, // 제품 ID (참조)
  quantity: { type: Number, required: true }, // 수량
  userId: { type: mongoose.Types.ObjectId, ref: "User"}, // 결제한 사용자 ID
  orderId: { type: String, required: true }, // 주문 ID
  paymentKey: { type: String, required: true }, // 결제 키
  totalAmount: { type: Number, required: true }, // 결제 금액
  userName: { type: String, required: true }, // 사용자 이름
  userEmail: { type: String, required: true }, // 사용자 이메일
  userPhone: { type: String, required: true }, // 사용자 휴대전화
  address: { type: String, required: true }, // 주소
  deliveryMessage: { type: String, default: "" }, // 배송 메시지
  orderName: { type: String, required: true }, // 주문 이름
  status: { type: String, default: "success" }, // 결제 상태
  createdAt: { type: String, default: getCurrentTime }, // 결제 생성 시간
});

export default mongoose.model("MdTossPayment", mdTossSchema, "mdTossPayments");
