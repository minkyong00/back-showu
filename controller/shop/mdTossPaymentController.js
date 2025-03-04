import MdTossPayment from "../../models/shop/mdTossPaymentSchema.js"; // Mongoose 모델 가져오기

const mdTossPayment = async (req, res) => {
  const {
    paymentKey,
    orderId,
    amount,
    orderName,
    productId,
    quantity,
    userName,
    userEmail,
    userPhone,
    address,
    deliveryMessage,
    userId, // 요청 본문에서 userId 받기
  } = req.body;

  // 결제 요청 데이터 로그
  console.log("결제 요청 데이터:", req.body);

  // userId가 제대로 전달되었는지 확인하는 로그 추가
  console.log("userId:", userId);

  try {
    const payment = new MdTossPayment({
      productId,
      quantity,
      userId, // userId 저장
      orderId,
      paymentKey,
      totalAmount: amount,
      orderName,
      userName,
      userEmail,
      userPhone,
      address,
      deliveryMessage,
      status: "success",
    });

    await payment.save(); // 결제 정보를 MongoDB에 저장

    // 결제 정보 저장 완료 로그
    console.log("결제 정보 저장 완료:", payment);
    res
      .status(200)
      .json({ message: "결제 정보가 성공적으로 저장되었습니다.", payment });
  } catch (error) {
    console.error("MongoDB 저장 중 오류 발생:", error);
    res.status(500).json({ message: "결제 정보 저장 중 오류 발생" });
  }
};

export { mdTossPayment };
