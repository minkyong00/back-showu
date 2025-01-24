import Md from '../../models/shop/mdSchema.js';
// import Like from '../../models/users/likeSchema.js';

const seedMdProducts = async (req, res) => {
  
// MD 상품 삽입
try {
  const insertedMdProducts = await Md.insertMany(mdData);
  console.log("MD 상품 데이터가 삽입되었습니다:", insertedMdProducts);
  res.status(201).json({
    message: "MD 상품 데이터가 성공적으로 삽입되었습니다.",
    insertedMdProducts,
  });
} catch (error) {
  console.error("MD 상품 삽입 실패: ", error.message);
  res.status(500).json({
    message: "MD 상품 데이터 삽입 중 오류가 발생했습니다.",
    error: error.message,
  });
}
}


// MD 상품 조회
const getMdProduct = async (req, res) => {
  try {
    const products = await Md.find(); // 모든 상품 조회
    res.status(200).json(products);
  } catch (error) {
    console.error("상품 데이터를 가져오는 데 실패했습니다.", error.message);
    res.status(500).send("상품 데이터를 가져오는 데 실패했습니다.");
  }
};


// MD 상품 상세 조회
const getMdProductById = async (req, res) => {
  try {
    const { id } = req.params; 
    const product = await Md.findOne({ _id: id }); 
    console.log(product)

    if (!product) {
      return res.status(404).json({ message: "상품을 찾을 수 없습니다." });
    }

    res.json(product); 
  } catch (error) {
    console.error("상품 상세 조회 오류:", error);
    res.status(500).json({ message: "서버 오류" });
  }
};

// MD 상품 마이페이지 찜 추가
const addToLike = async (req, res) => {
  const { userId, productId } = req.body;

  if (!userId || !productId) {
    return res.status(400).json({ message: "userId 또는 productId가 없습니다." });
  }

  try {
    const existingLike = await Like.findOne({ user: userId, likeMd: productId });
    if (existingLike) {
      return res.status(400).json({ message: "이미 찜한 상품입니다!" });
    }

    const like = new Like({
      user: userId,
      likeMd: productId,
    });

    await like.save();
    res.status(200).json({ message: "상품이 찜 목록에 추가되었습니다!" });
  } catch (error) {
    console.error("찜 목록 추가 오류: ", error);
    res.status(500).json({ message: "서버 오류" });
  }
};

// MD 상품 마이페이지 찜 목록에서 제거
const removeFromLike = async (req, res) => {
  const { userId, productId } = req.body;

  try {
    const like = await Like.findOneAndDelete({ user: userId, likeMd: productId})
    if(!like) {
      return res.status(400).json({ message: "찜 목록에 해당 상품이 존재하지 않습니다."})
    }
    res.status(200).json({ message: "상품이 찜 목록에서 삭제되었습니다."})
  } catch (error) {
    console.error("찜 목록 제거 오류: ", error)
    res.status(500).json({ message: "서버 오류"})
  }
}

// Md 상품 찜 목록 조회
const getLike = async (req, res) => {
  const { userId } = req.params;

  try {
    const likes = await Like.find({ user: userId }).populate("likeMd");

    res.status(200).json(likes.map(like => like.likeMd))
  } catch (error) {
    console.error("찜 목록 조회 오류: ", error)
    res.status(500).json({ message: "서버 오류"})
  }
}

export { seedMdProducts, getMdProduct, getMdProductById, addToLike, removeFromLike, getLike};
