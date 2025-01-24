import { model, Schema } from "mongoose";
import { getCurrentTime } from "../../utils/utils.js";

const auctionPaymentSchema = new Schema({
  productName: { type: Schema.Types.ObjectId, ref: 'Auction', required: true },
  finalPrice: { type: Number, required: true },
  quantity: { type: Number, required: true, default: 1 },
  image: { type: String, required: true },

  name: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  address: { type: String, required: true },
  message: { type: String },

  totalAmount: { type: Number, required: true },
  deliveryFee: { type: Number, default: 3000 },
  discount: { type: Number, default: 0 },
  paymentMethod: { type: String, enum: ['신용/체크카드', '무통장입금', '네이버페이', '카카오페이', '토스페이'], required: true },
  status: { type: String, enum: ['주문완료', '배송중', '배송완료', '환불 처리', '환불 완료'], default: '주문완료', required: true },
  paymentAt: { type: String, default: getCurrentTime },
});


export default model("AuctionPayment", auctionPaymentSchema, "auctionPayment");
