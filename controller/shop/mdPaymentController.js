import MdPayment from "../../models/shop/mdPaymentSchema.js";

const confirmPayment = async (req, res) => {
  console.log("Confirm Payment Request Body:", req.body); // 요청 본문 로그 추가
  console.log("Request Headers:", req.headers); // 요청 헤더 로그 추가

  try {
    const {
      productName,
      price,
      quantity,
      image,
      name,
      address,
      totalAmount,
      deliveryFee,
      discount,
    } = req.body;

    const newPayment = new MdPayment({
      productName,
      price,
      quantity,
      image,
      name,
      address,
      totalAmount,
      deliveryFee,
      discount,
      status: "success", // 결제 상태 설정
    });

    await newPayment.save();

    res.status(200).json({ message: "결제 성공", paymentId: newPayment._id });
  } catch (error) {
    res.status(500).json({ message: "결제 실패", error: error.message });
  }
};

export { confirmPayment };
