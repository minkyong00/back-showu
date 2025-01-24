// import inquiryListSchema from "../../models/shop/inquiryListSchema";
// import mdInquiry from from "../../models/shop/mdInquiryController.js"

// const getInquiryList = async (req, res) => {
//   try {
//     const inquiries = await mdInquiry.find();
//     res.json({ inquiryList: inquiries })
//   } catch (error) {
//     console.error("문의 목록 조회 오류", error);
//     res.status(500).json({error : "문의 목록을 가져오는 데 실패했습니다."})
//   }
// }

// const getInquiryDetail = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const inquiry = await mdInquiry.findById(id);
//     if (!inquiry) {
//       return res.statue(404).json({error: "해당 문의를 찾을 수 없습니다."})

//     }
//     res.json(inquiry);
//   } catch (error) {
//     console.log("문의 상세 조회 오류", error)
//     res,status(500).json({error: "문의 상세 정보를 가져오는데 실패했습니다."})
//   }
// }