import MdPayment from "../../models/shop/mdPaymentSchema.js";

const createMdPayment = async (req, res) => {
  const { 
    productName, 
    price, 
    quantity, 
    image, 
    name, 
    address, 
    message, 
    totalAmount, 
    deliveryFee, 
    discount, 
    paymentMethod 
  } = req.body;

  console.log(req.body)

  try {
    // 전달된 데이터가 배열이라면, 각각의 상품에 대해 새로운 결제 데이터를 생성할 수 있음
    const newMdPayment = new MdPayment({
      productName, // 상품명 (배열일 수 있음)
      price,       // 가격 (배열일 수 있음)
      quantity,    // 수량 (배열일 수 있음)
      image,       // 이미지 URL (배열일 수 있음)
      name,        // 고객명
      address,     // 배송 주소
      message,     // 주문 메시지
      totalAmount, // 총 결제 금액
      deliveryFee, // 배송비
      discount,    // 할인 금액
      paymentMethod, // 결제 수단
      status: '주문완료', // 주문 상태
      paymentAt: new Date().toISOString(), // 결제일
    });

    // 결제 정보를 DB에 저장
    await newMdPayment.save();
    res.status(200).json({ message: 'MD 결제 정보가 저장되었습니다.', payment: newMdPayment });
  } catch (error) {
    console.error('MD 결제 오류:', error);
    res.status(500).json({ message: 'MD 결제 처리 중 오류가 발생했습니다.' });
  } }
  
export { createMdPayment };
