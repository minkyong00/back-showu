import RentalPayment from "../../models/reservation/rentalPaymentSchema.js"; // Mongoose 모델 가져오기

const rentalTossPayment = async (req, res) => {
  const {
    paymentKey,
    orderId,
    amount,
    orderName,
    spaceId,
    userId,
    spaceLocation, // spaceLocation 필드 사용
    rentalPeriod,
  } = req.body;

  // 결제 요청 데이터 로그
  console.log("결제 요청 데이터:", req.body);

  try {
    const payment = new RentalPayment({
      spaceId,
      userId,
      orderId,
      paymentKey,
      amount,
      orderName,
      spaceLocation, // spaceLocation 필드 사용
      rentalPeriod,
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

export { rentalTossPayment };
