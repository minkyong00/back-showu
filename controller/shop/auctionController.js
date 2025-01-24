import Auction from '../../models/shop/auctionSchema.js'

const seedAuctionProducts = async (req, res) => {

  const auctionData = [
    { 
      category: "연극",
      auctionName: "베르사유의 장미 프로그램북 스페셜 에디션",
      auctionId: "111ABC",
      time: "",
      count: 60,
      unit: 1000,
      bid: 0,
      finalPrice: 0,
      description: "상세 설명1",
      image: "/images/shop/auction/auction1.jpg",
      imageDetail: "/images/shop/auction/auction1-1.jpg",
      ishearted: false
    },
    { 
      category: "연극",
      auctionName: "베르사유의 장미 금속 마그넷",
      auctionId: "112ABC",
      time: "",
      count: 88,
      unit: 1000,
      bid: 0,
      finalPrice: 0,
      description: "상세 설명2",
      image: "/images/shop/auction/auction2.jpg",
      imageDetail: "/images/shop/auction/auction2-1.jpg",
      ishearted: false
    },
    {
      category: "연극",
      auctionName: "베르사유의 장미 고블렛",
      auctionId: "113ABC",
      time: "",
      count: 23,
      unit: 1000,
      bid: 0,
      finalPrice: 0,
      description: "상세 설명3",
      image: "/images/shop/auction/auction3.jpg",
      imageDetail: "/images/shop/auction/auction3-1.jpg",
      ishearted: false
    },
    { 
      category: "연극",
      auctionName: "베르사유의 장미 키링",
      auctionId: "114ABC",
      time: "",
      count: 10,
      unit: 1000,
      bid: 0,
      finalPrice: 0,
      description: "상세 설명4",
      image: "/images/shop/auction/auction4.jpg",
      imageDetail: "/images/shop/auction/auction4-1.jpg",
      ishearted: false
    },
    { 
      category: "연극",
      auctionName: "베르사유의 장미 배지1",
      auctionId: "115ABC",
      time: "",
      count: 88,
      unit: 1000,
      bid: 0,
      finalPrice: 0,
      description: "상세 설명5",
      image: "/images/shop/auction/auction5.jpg",
      imageDetail: "/images/shop/auction/auction5-1.jpg",
      ishearted: false
    },
    { 
      category: "연극",
      auctionName: "베르사유의 장미 배지2",
      auctionId: "116ABC",
      time: "",
      count: 23,
      unit: 1000,
      bid: 0,
      finalPrice: 0,
      description: "상세 설명6",
      image: "/images/shop/auction/auction6.jpg",
      imageDetail: "/images/shop/auction/auction6-1.jpg",
      ishearted: false
    },
    { 
      category: "연극",
      auctionName: "베르사유의 장미 배지3",
      auctionId: "117ABC",
      time: "",
      count: 60,
      unit: 1000,
      bid: 0,
      finalPrice: 0,
      description: "상세 설명7",
      image: "/images/shop/auction/auction7.jpg",
      imageDetail: "/images/shop/auction/auction7-1.jpg",
      ishearted: false
    },
    { 
      category: "연극",
      auctionName: "베르사유의 장미 스트랩 파우치",
      auctionId: "118ABC",
      time: "",
      count: 88,
      unit: 1000,
      bid: 0,
      finalPrice: 0,
      description: "상세 설명8",
      image: "/images/shop/auction/auction8.jpg",
      imageDetail: "/images/shop/auction/auction8-1.jpg",
      ishearted: false
    },
    { 
      category: "연극",
      auctionName: "2025 캘린더",
      auctionId: "119ABC",
      time: "",
      count: 23,
      unit: 1000,
      bid: 0,
      finalPrice: 0,
      description: "상세 설명9",
      image: "/images/shop/auction/auction9.jpg",
      imageDetail: "/images/shop/auction/auction9-1.jpg",
      ishearted: false
    },
    { 
      category: "영화",
      auctionName: "4월은 너의 거짓말 금속 마그넷",
      auctionId: "120ABC",
      time: "",
      count: 60,
      unit: 1000,
      bid: 0,
      finalPrice: 0,
      description: "상세 설명10",
      image: "/images/shop/auction/auction10.jpg",
      imageDetail: "/images/shop/auction/auction10-1.jpg",
      ishearted: false
    },
    { 
      category: "영화",
      auctionName: "4월은 너의 거짓말 배지1",
      auctionId: "121ABC",
      time: "",
      count: 88,
      unit: 1000,
      bid: 0,
      finalPrice: 0,
      description: "상세 설명11",
      image: "/images/shop/auction/auction11.jpg",
      imageDetail: "/images/shop/auction/auction11-1.jpg",
      ishearted: false
    },
    { 
      category: "영화",
      auctionName: "4월은 너의 거짓말 배지2",
      auctionId: "123ABC",
      time: "",
      count: 23,
      unit: 1000,
      bid: 0,
      finalPrice: 0,
      description: "상세 설명12",
      image: "/images/shop/auction/auction12.jpg",
      imageDetail: "/images/shop/auction/auction12-1.jpg",
      ishearted: false
    },
    { 
      category: "영화",
      auctionName: "4월은 너의 거짓말 배지3",
      auctionId: "124ABC",
      time: "",
      count: 60,
      unit: 1000,
      bid: 0,
      finalPrice: 0,
      description: "상세 설명13",
      image: "/images/shop/auction/auction13.jpg",
      imageDetail: "/images/shop/auction/auction13-1.jpg",
      ishearted: false
    },
    { 
      category: "영화",
      auctionName: "4월은 너의 거짓말 에코백",
      auctionId: "125ABC",
      time: "",
      count: 88,
      unit: 1000,
      bid: 0,
      finalPrice: 0,
      description: "상세 설명14",
      image: "/images/shop/auction/auction14.jpg",
      imageDetail: "/images/shop/auction/auction14-1.jpg",
      ishearted: false
    },
    { 
      category: "영화",
      auctionName: "4월은 너의 거짓말 메시지 엽서",
      auctionId: "126ABC",
      time: "",
      count: 23,
      unit: 1000,
      bid: 0,
      finalPrice: 0,
      description: "상세 설명15",
      image: "/images/shop/auction/auction15.jpg",
      imageDetail: "/images/shop/auction/auction15-1.jpg",
      ishearted: false
    },
    { 
      category: "영화",
      auctionName: "4월은 너의 거짓말 유리컵",
      auctionId: "127ABC",
      time: "",
      count: 60,
      unit: 1000,
      bid: 0,
      finalPrice: 0,
      description: "상세 설명16",
      image: "/images/shop/auction/auction16.jpg",
      imageDetail: "/images/shop/auction/auction16-1.jpg",
      ishearted: false
    },
    { 
      category: "영화",
      auctionName: "4월은 너의 거짓말 대본집",
      auctionId: "128ABC",
      time: "",
      count: 88,
      unit: 1000,
      bid: 0,
      finalPrice: 0,
      description: "상세 설명17",
      image: "/images/shop/auction/auction17.jpg",
      imageDetail: "/images/shop/auction/auction17-1.jpg",
      ishearted: false
    },
    { 
      category: "영화",
      auctionName: "4월은 너의 거짓말 프로그램북",
      auctionId: "129ABC",
      time: "",
      count: 23,
      unit: 1000,
      bid: 0,
      finalPrice: 0,
      description: "상세 설명18",
      image: "/images/shop/auction/auction18.jpg",
      imageDetail: "/images/shop/auction/auction18-1.jpg",
      ishearted: false
    },
    { 
      category: "뮤지컬",
      auctionName: "프랑켄슈타인 거울 그립톡",
      auctionId: "130ABC",
      time: "",
      count: 60,
      unit: 1000,
      bid: 0,
      finalPrice: 0,
      description: "상세 설명19",
      image: "/images/shop/auction/auction19.jpg",
      imageDetail: "/images/shop/auction/auction19-1.jpg",
      ishearted: false
    },
    { 
      category: "뮤지컬",
      auctionName: "프랑켄슈타인 마스킹 테이프",
      auctionId: "131ABC",
      time: "",
      count: 88,
      unit: 1000,
      bid: 0,
      finalPrice: 0,
      description: "상세 설명20",
      image: "/images/shop/auction/auction20.jpg",
      imageDetail: "/images/shop/auction/auction20-1.jpg",
      ishearted: false
    },
    { 
      category: "뮤지컬",
      auctionName: "프랑켄슈타인 글리터 코스터",
      auctionId: "132ABC",
      time: "",
      count: 23,
      unit: 1000,
      bid: 0,
      finalPrice: 0,
      description: "상세 설명21",
      image: "/images/shop/auction/auction21.jpg",
      imageDetail: "/images/shop/auction/auction21-1.jpg",
      ishearted: false
    },
    { 
      category: "뮤지컬",
      auctionName: "프랑켄슈타인 미니 티켓북",
      auctionId: "133ABC",
      time: "",
      count: 60,
      unit: 1000,
      bid: 0,
      finalPrice: 0,
      description: "상세 설명22",
      image: "/images/shop/auction/auction22.jpg",
      imageDetail: "/images/shop/auction/auction22-1.jpg",
      ishearted: false
    },
    { 
      category: "뮤지컬",
      auctionName: "프랑켄슈타인 금속 북마크",
      auctionId: "134ABC",
      time: "",
      count: 88,
      unit: 1000,
      bid: 0,
      finalPrice: 0,
      description: "상세 설명23",
      image: "/images/shop/auction/auction23.jpg",
      imageDetail: "/images/shop/auction/auction23-1.jpg",
      ishearted: false
    },
    { 
      category: "뮤지컬",
      auctionName: "프랑켄슈타인 접이식 우산",
      auctionId: "135ABC",
      time: "",
      count: 23,
      unit: 1000,
      bid: 0,
      finalPrice: 0,
      description: "상세 설명24",
      image: "/images/shop/auction/auction24.jpg",
      imageDetail: "/images/shop/auction/auction24-1.jpg",
      ishearted: false
    },
    { 
      category: "뮤지컬",
      auctionName: "프랑켄슈타인 앙리 엽서 (고은성VER.)",
      auctionId: "136ABC",
      time: "",
      count: 60,
      unit: 1000,
      bid: 0,
      finalPrice: 0,
      description: "상세 설명25",
      image: "/images/shop/auction/auction25.jpg",
      imageDetail: "/images/shop/auction/auction25-1.jpg",
      ishearted: false
    },
    { 
      category: "뮤지컬",
      auctionName: "프랑켄슈타인 앙리 엽서 (이해준VER.)",
      auctionId: "137ABC",
      time: "",
      count: 88,
      unit: 1000,
      bid: 0,
      finalPrice: 0,
      description: "상세 설명26",
      image: "/images/shop/auction/auction26.jpg",
      imageDetail: "/images/shop/auction/auction26-1.jpg",
      ishearted: false
    },
    { 
      category: "뮤지컬",
      auctionName: "프랑켄슈타인 앙리 엽서 (카이VER.)",
      auctionId: "138ABC",
      time: "",
      count: 23,
      unit: 1000,
      bid: 0,
      finalPrice: 0,
      description: "상세 설명27",
      image: "/images/shop/auction/auction27.jpg",
      imageDetail: "/images/shop/auction/auction27-1.jpg",
      ishearted: false
    },
    { 
      category: "뮤지컬",
      auctionName: "프랑켄슈타인 앙리 렌티큘러 포스터 (고은성VER.)",
      auctionId: "139ABC",
      time: "",
      count: 60,
      unit: 1000,
      bid: 0,
      finalPrice: 0,
      description: "상세 설명28",
      image: "/images/shop/auction/auction28.jpg",
      imageDetail: "/images/shop/auction/auction28-1.jpg",
      ishearted: false
    },
    { 
      category: "뮤지컬",
      auctionName: "프랑켄슈타인 앙리 렌티큘러 포스터 (이해준VER.)",
      auctionId: "140ABC",
      time: "",
      count: 88,
      unit: 1000,
      bid: 0,
      finalPrice: 0,
      description: "상세 설명29",
      image: "/images/shop/auction/auction29.jpg",
      imageDetail: "/images/shop/auction/auction29-1.jpg",
      ishearted: false
    },
    { 
      category: "뮤지컬",
      auctionName: "프랑켄슈타인 앙리 렌티큘러 포스터 (카이VER.)",
      auctionId: "218ABC",
      time: "",
      count: 23,
      unit: 1000,
      bid: 0,
      finalPrice: 0,
      description: "상세 설명30",
      image: "/images/shop/auction/auction30.jpg",
      imageDetail: "/images/shop/auction/auction30-1.jpg",
      ishearted: false
    },
  ];
  

// 경매 상품 삽입
try {
  const insertedAucitonProducts = await Auction.insertMany(auctionData);
  console.log("경매 상품 데이터가 삽입되었습니다:", insertedAucitonProducts);
  res.status(201).json({
    message: "경매 상품 데이터가 성공적으로 삽입되었습니다.",
    insertedAucitonProducts,
  });
} catch (error) {
  console.error("경매 상품 삽입 실패: ", error.message);
  res.status(500).json({
    message: "경매 상품 데이터 삽입 중 오류가 발생했습니다.",
    error: error.message,
  });
}
}


// 경매 상품 조회
const getAuctionProduct = async (req, res) => {
  try {
    const products = await Auction.find(); 
    res.status(200).json(products);
  } catch (error) {
    console.error("상품 데이터를 가져오는 데 실패했습니다.", error.message);
    res.status(500).send("상품 데이터를 가져오는 데 실패했습니다.");
  }
}


// 경매 상품 상세 조회
const getAuctionProductById = async (req, res) => {
  try {
    const { id } = req.params; 
    const product = await Auction.findOne({ _id: id }); 

    if (!product) {
      return res.status(404).json({ message: "상품을 찾을 수 없습니다." });
    }

    res.json(product); 
  } catch (error) {
    console.error("상품 상세 조회 오류:", error);
    res.status(500).json({ message: "서버 오류" });
  }
};

export { seedAuctionProducts, getAuctionProduct, getAuctionProductById };