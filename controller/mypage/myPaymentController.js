import AuctionPayment from "../../models/shop/auctionPaymentSchema.js";
import AuctionTossPayment from "../../models/shop/auctionTossPaymentSchema.js";
import MdPayment from "../../models/shop/mdPaymentSchema.js";
import MdTossPayment from "../../models/shop/mdTossPaymentSchema.js";

const getPaymentList = async (req, res) => {
  const userId = req.user._id;
  // console.log("user", req.user.name)
  const userName = req.user.name;

  try {
    const foundMdPayment = await MdTossPayment.find({ userName : userName })
      .populate("productId")
      .lean();

    const foundAuctionPayment = await AuctionTossPayment.find({ userName : userName })
      .populate("productId")
      .lean();

    console.log("foundMdPayment", foundMdPayment)
    console.log("foundAuctionPayment", foundAuctionPayment)

    const allPaymentList = [
      ...foundMdPayment.map((payment) => ({
        type : "MD",
        // productName: payment.orderName,
        ...payment
      })),
      ...foundAuctionPayment.map((payment) => ({
        type : "Auction",
        // productName: payment.orderName,
        ...payment
      }))
    ]

    allPaymentList.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

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