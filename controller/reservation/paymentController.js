import Payment from "../../models/reservation/paymentSchema.js";

// 결제 정보 추가
const addPayment = async (req, res) => {
  const {
    reservationId,
    userId,
    amount,
    status,
    paymentMethod,
    transactionId,
  } = req.body;
  try {
    const payment = new Payment({
      reservationId,
      userId,
      amount,
      status,
      paymentMethod,
      transactionId,
    });
    const newPayment = await payment.save();
    res.status(201).json(newPayment);
  } catch (error) {
    res
      .status(500)
      .json({ message: "결제 정보 추가 중 오류 발생", error: error.message });
  }
};

// 모든 결제 정보 조회
const getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.find().populate("reservationId userId");
    res.status(200).json(payments);
  } catch (error) {
    res
      .status(500)
      .json({ message: "결제 정보 조회 중 오류 발생", error: error.message });
  }
};

// 사용자별 결제 정보 조회
const getPaymentsByUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const payments = await Payment.find({ userId }).populate("reservationId");
    res.status(200).json(payments);
  } catch (error) {
    res
      .status(500)
      .json({ message: "결제 정보 조회 중 오류 발생", error: error.message });
  }
};

export { addPayment, getAllPayments, getPaymentsByUser };
