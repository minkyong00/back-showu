import mongoose from "mongoose";
import { getCurrentTime } from "../../utils/utils.js";

const ticketPaymentSchema = new mongoose.Schema({
  showId: { type: mongoose.Types.ObjectId, ref: "Show", required: true }, // 공연 ID (참조)
  date: { type: Date, required: true }, // 공연 날짜
  time: { type: String, required: true }, // 공연 시간
  seatNumbers: [{ type: String, required: true }], // 좌석 번호
  userId: { type: mongoose.Types.ObjectId, ref: "User", required: true }, // 결제한 사용자 ID
  orderId: { type: String, required: true }, // 주문 ID
  paymentKey: { type: String, required: true }, // 결제 키
  amount: { type: Number, required: true }, // 결제 금액
  orderName: { type: String, required: true }, // 공연 이름 (추가된 부분)
  status: { type: String, default: "success" }, // 결제 상태
  createdAt: { type: String, default: getCurrentTime }, // 결제 생성 시간
});

export default mongoose.model("TicketPayment", ticketPaymentSchema, "ticketPayments");

// import mongoose from "mongoose";
// import { getCurrentTime } from "../../utils/utils.js";

// const ticketPaymentSchema = new mongoose.Schema({
//   showId: { type: mongoose.Types.ObjectId, ref: "Show", required: true },
//   date: { type: Date, required: true },
//   time: { type: String, required: true },
//   seatNumbers: [{ type: String, required: true }],
//   userId: { type: mongoose.Types.ObjectId, ref: "User", required: true },
//   orderId: { type: String, required: true },
//   paymentKey: { type: String, required: true },
//   amount: { type: Number, required: true },
//   orderName: { type: String, required: true },
//   status: { type: String, default: "success" },
//   createdAt: { type: String, default: getCurrentTime },
//   isPaid: { type: Boolean, default: false }, // 결제 상태 추가
// });

// export default mongoose.model("TicketPayment", ticketPaymentSchema, "ticketpayments");
