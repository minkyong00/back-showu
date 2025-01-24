import AuctionInquiry from "../../models/shop/auctionInquirySchema.js"; 

// 문의 등록 
const createInquiry = async (req, res) => {
  try {
    const { type, form, title, content, selectedAlarm, isAgreed, auctionName, category, } = req.body;
    // const userName = req.user.name;
    
    if (!type || !form || !title || !content || !isAgreed) {
      return res.status(400).json({ message: "모든 필드를 입력해주세요." });
    }

    // 새로운 문의 생성
    const newInquiry = new AuctionInquiry({
      type,
      form,
      title,
      content,
      selectedAlarm,
      isAgreed,
      auctionName,       
      category: category || 'auction', 
    });

    // DB에 저장
    const savedInquiry = await newInquiry.save();

    // 저장 성공
    return res.status(201).json({ message: "문의가 등록되었습니다!", inquiry: savedInquiry });
  } catch (error) {
    console.error("문의 등록 오류: ", error);
    return res.status(500).json({ message: "서버 오류, 문의 등록 실패." });
  }
};

// 문의 내역 조회
const getInquiryList = async (req, res) => {
  try {
    const inquiryList = await AuctionInquiry.find().sort({ createdAt: -1 });

    return res.status(200).json({ inquiryList });
  } catch (error) {
    console.error("문의 리스트 조회 오류:", error);
    return res.status(500).json({ message: "서버 오류, 문의 내역 조회 실패." });
  }
};

// 상세 문의 내역 조회
const getInquiryDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const inquiry = await AuctionInquiry.findById(id);

    if (!inquiry) {
      return res.status(404).json({ message: "해당 문의를 찾을 수 없습니다." });
    }

    // 조회 성공
    return res.status(200).json({ inquiry });
  } catch (error) {
    console.error("상세 문의 내역 조회 오류:", error);
    return res.status(500).json({ message: "서버 오류, 상세 문의 내역 조회 실패." });
  }
};


// 문의 수정
const updateInquiry = async (req, res) => {
  try {
    const { id } = req.params;
    const { content } = req.body;

    const updatedInquiry = await AuctionInquiry.findByIdAndUpdate(
      id,
      {
        content,
      },
      { new: true } 
    );

    if (!updatedInquiry) {
      return res.status(404).json({ message: "해당 문의를 찾을 수 없습니다." });
    }

    console.log("Updated Inquiry:", updatedInquiry);  
    return res.status(200).json({ message: "문의가 성공적으로 수정되었습니다.", inquiry: updatedInquiry });
  } catch (error) {
    console.error("문의 수정 오류:", error);
    return res.status(500).json({ message: "서버 오류, 문의 수정 실패." });
  }
};


// 문의 삭제 
const deleteInquiry = async (req, res) => {
  try {
    const { id } = req.params; 

    // 문의 삭제(DB)
    const deletedInquiry = await AuctionInquiry.findByIdAndDelete(id);

    if (!deletedInquiry) {
      return res.status(404).json({ message: "해당 문의를 찾을 수 없습니다." });
    }

    // 삭제 성공
    return res.status(200).json({ message: "문의가 성공적으로 삭제되었습니다." });
  } catch (error) {
    console.error("문의 삭제 오류:", error);
    return res.status(500).json({ message: "서버 오류, 문의 삭제 실패." });
  }
};


export { createInquiry, getInquiryList, getInquiryDetail, updateInquiry, deleteInquiry };

