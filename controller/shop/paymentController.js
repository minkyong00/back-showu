import got from "got"

const tossPayment = (req, res) => {
    // 클라이언트에서 받은 JSON 요청 바디입니다.
    const { paymentKey, orderId, amount } = req.body;

    // 토스페이먼츠 API는 시크릿 키를 사용자 ID로 사용하고, 비밀번호는 사용하지 않습니다.
    // 비밀번호가 없다는 것을 알리기 위해 시크릿 키 뒤에 콜론을 추가합니다.
    const widgetSecretKey = "test_gsk_docs_OaPz8L5KdmQXkzRz3y47BMw6";
    const encryptedSecretKey =
      "Basic " + Buffer.from(widgetSecretKey + ":").toString("base64");
  
    // 결제를 승인하면 결제수단에서 금액이 차감돼요.
    got.post("https://api.tosspayments.com/v1/payments/confirm", {
        headers: {
          Authorization: encryptedSecretKey,
          "Content-Type": "application/json",
        },
        json: {
          orderId: orderId,
          amount: amount,
          paymentKey: paymentKey,
        },
        responseType: "json",
      })
      .then(function (response) {
        // 결제 성공 비즈니스 로직을 구현하세요.
        // mongoDB 유저 찾아서
        // 결제 테이블에 유저정보와 결제 정보를 넣으면 된다.
        // 화면 쪽으로 응답해준다.
        console.log(response.body);
        res.status(response.statusCode).json(response.body)
      })
      .catch(function (error) {
        // 결제 실패 비즈니스 로직을 구현하세요.
        console.log(error.response.body);
        res.status(error.response.statusCode).json(error.response.body)
      });
  
}


export { tossPayment }


// import Payment from '../../models/shop/paymentSchema.js'

// 결제 상품 삭제
// const removeFromPayment = async (req, res) => {
//   try {
//     const { userId, productId } = req.body;
//     const payment = await Payment.findOne({ userId });
//     if (!payment) {
//       return res.status(404).json({ message: "결제 목록이 비어 있습니다." });
//     }
//     payment.products = payment.products.filter(item => item.productId !== productId);
//     await payment.save();
//     res.status(200).json(payment);
//   } catch (error) {
  //     console.error("결제 상품 삭제 오류:", error);
  //     res.status(500).json({ message: "결제 상품 삭제 중 오류가 발생했습니다." });
  //   }
  // };
  
  // export { removeFromPayment };


