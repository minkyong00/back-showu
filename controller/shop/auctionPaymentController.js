import AuctionPayment from '../../models/shop/auctionPaymentSchema.js';

const createAuctionPayment = async (req, res) => {
  const { productName, finalPrice, quantity, image, name, address, message, totalAmount, deliveryFee, discount, paymentMethod } = req.body;

  try {
    const newAuctionPayment = new AuctionPayment({
      productName,
      finalPrice,
      quantity,
      image,
      name,
      address,
      message,
      totalAmount,
      deliveryFee,
      discount,
      paymentMethod,
      status: '주문완료',
      paymentAt: new Date().toISOString(),
    });

    await newAuctionPayment.save();
    res.status(200).json({ message: '경매 결제 정보가 저장되었습니다.', payment: newAuctionPayment });
  } catch (error) {
    console.error('경매 결제 오류:', error);
    res.status(500).json({ message: '경매 결제 처리 중 오류가 발생했습니다.' });
  }
};

export { createAuctionPayment };
