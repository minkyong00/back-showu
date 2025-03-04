import TicketPayment from "../../models/reservation/ticketPaymentSchema.js"; // Mongoose 모델 가져오기

const tossPayment = async (req, res) => {
  const {
    paymentKey,
    orderId,
    amount,
    orderName,
    showId,
    date,
    time,
    seatNumbers,
    userId,
  } = req.body;

  // 결제 요청 데이터 로그
  console.log("결제 요청 데이터:", req.body);

  try {
    const payment = new TicketPayment({
      showId,
      date,
      time,
      seatNumbers,
      userId,
      orderId,
      paymentKey,
      amount,
      orderName,
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

export { tossPayment };

// 세션 만료되었던 코드 => 따라서 https://api.tosspayments.com/v1/payments/confirm에 요청자체를 보내지 않는걸로 우선 처리
// import axios from "axios";
// import TicketPayment from "../../models/reservation/ticketPaymentSchema.js"; // Mongoose 모델 가져오기

// const tossPayment = async (req, res) => {
//   const {
//     paymentKey,
//     orderId,
//     amount,
//     orderName,
//     showId,
//     date,
//     time,
//     seatNumbers,
//     userId,
//   } = req.body;

//   // 결제 요청 데이터 로그
//   console.log("결제 요청 데이터:", req.body);

//   const widgetSecretKey = "test_gsk_docs_OaPz8L5KdmQXkzRz3y47BMw6";
//   const encryptedSecretKey =
//     "Basic " + Buffer.from(widgetSecretKey + ":").toString("base64");

//   const options = {
//     method: "POST",
//     url: "https://api.tosspayments.com/v1/payments/confirm",
//     headers: {
//       Authorization: encryptedSecretKey,
//       "Content-Type": "application/json",
//     },
//     data: {
//       orderId: orderId,
//       amount: amount,
//       paymentKey: paymentKey,
//     },
//   };

//   console.log("결제 확인 요청 URL:", options.url);
//   console.log("결제 확인 요청 데이터:", options.data);

//   try {
//     const [response] = await Promise.all([axios(options)]);
//     const responseBody = response.data;

//     // 결제 확인 응답 데이터 로그
//     console.log("결제 확인 응답 데이터:", responseBody);

//     const payment = new TicketPayment({
//       showId,
//       date,
//       time,
//       seatNumbers,
//       userId,
//       orderId,
//       paymentKey,
//       amount,
//       orderName,
//       status: "success",
//     });

//     await payment.save(); // 결제 정보를 MongoDB에 저장

//     // 결제 정보 저장 완료 로그
//     console.log("결제 정보 저장 완료:", payment);
//     res.status(200).json(responseBody);
//   } catch (error) {
//     if (error.response) {
//       const errorResponse = error.response.data;
//       // 결제 실패 응답 데이터 로그
//       console.error("결제 실패 응답 데이터:", errorResponse);
//       res.status(error.response.status).json(errorResponse);
//     } else {
//       console.error("HTTP 요청 중 오류 발생:", error);
//       res.status(500).json({ message: "결제 요청 중 오류 발생" });
//     }
//   }
// };

// export { tossPayment };

//=====================================================
// import axios from "axios";
// import TicketPayment from "../../models/ticketPaymentSchema.js"; // Mongoose 모델 가져오기

// const tossPayment = async (req, res) => {
//   const {
//     paymentKey,
//     orderId,
//     amount,
//     orderName,
//     showId,
//     date,
//     time,
//     seatNumbers,
//     userId,
//   } = req.body;

//   // 결제 요청 데이터 로그
//   console.log("결제 요청 데이터:", req.body);

//   try {
//     // 예약 상태를 "pending"으로 설정
//     const payment = new TicketPayment({
//       showId,
//       date,
//       time,
//       seatNumbers,
//       userId,
//       orderId,
//       paymentKey,
//       amount,
//       orderName,
//       status: "pending", // 초기 상태를 "pending"으로 설정
//     });

//     await payment.save(); // 예약 정보를 MongoDB에 저장

//     // 결제 요청 URL과 데이터
//     const widgetSecretKey = "test_gsk_docs_OaPz8L5KdmQXkzRz3y47BMw6";
//     const encryptedSecretKey =
//       "Basic " + Buffer.from(widgetSecretKey + ":").toString("base64");

//     const options = {
//       method: "POST",
//       url: "https://api.tosspayments.com/v1/payments/confirm",
//       headers: {
//         Authorization: encryptedSecretKey,
//         "Content-Type": "application/json",
//       },
//       data: {
//         orderId: orderId,
//         amount: amount,
//         paymentKey: paymentKey,
//       },
//     };

//     console.log("결제 확인 요청 URL:", options.url);
//     console.log("결제 확인 요청 데이터:", options.data);

//     // 결제 확인 요청
//     const response = await axios(options);
//     const responseBody = response.data;

//     // 결제 확인 응답 데이터 로그
//     console.log("결제 확인 응답 데이터:", responseBody);

//     if (responseBody.code === "NOT_FOUND_PAYMENT_SESSION") {
//       console.error("결제 세션이 만료되었습니다. 다시 시도하세요.");
//       return res
//         .status(400)
//         .json({ message: "결제 세션이 만료되었습니다. 다시 시도하세요." });
//     }

//     // 결제 완료 시 예약 상태를 "success"로 업데이트
//     payment.status = "success";
//     payment.isPaid = true;
//     await payment.save();

//     // 결제 정보 저장 완료 로그
//     console.log("결제 정보 저장 완료:", payment);
//     res.status(200).json(responseBody);
//   } catch (error) {
//     console.error("MongoDB 저장 중 오류 발생:", error);
//     res.status(500).json({ message: "결제 정보 저장 중 오류 발생" });
//   }
// };

// export { tossPayment };
