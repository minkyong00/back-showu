import AuctionPayment from "../../models/shop/auctionPaymentSchema.js";
import MdPayment from "../../models/shop/mdPaymentSchema.js";

const getPaymentList = async (req, res) => {
  const userId = req.user._id;
  try {
    const foundMdPayment = await MdPayment.find({ name : userId })
      .populate("name")
      .populate("productName")
      .lean();

    const foundAuctionPayment = await AuctionPayment.find({ name : userId })
      .populate("name")
      .populate("productName")
      .lean();

    // console.log("foundMdPayment", foundMdPayment)
    // console.log("foundAuctionPayment", foundAuctionPayment)

    const allPaymentList = [
      ...foundMdPayment.map((payment) => ({
        type : "MD",
        productName: payment.productName.mdName,
        ...payment
      })),
      ...foundAuctionPayment.map((payment) => ({
        type : "Auction",
        productName: payment.productName.auctionName,
        ...payment
      }))
    ]

    console.log("allPaymentList", allPaymentList)

    res.status(200).json({
      paymentSuccess : true,
      message : "성공적으로 결제내역을 가져왔습니다.",
      allPaymentList : allPaymentList
    })

  } catch (error) {
    console.error("결제 내역을 가져오는 중 오류 발생:", error);

    res.status(500).json({
      paymentSuccess: false,
      message: "결제 내역을 가져오는 중 오류가 발생했습니다.",
    });
  }
}

export { getPaymentList }