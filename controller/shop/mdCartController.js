import MdCart from "../../models/shop/mdCartSchema.js"
import Md from "../../models/shop/mdSchema.js"; 

// 장바구니 조회
// const getCartItems = async (req, res) => {
//   try {
//     const userId = req.userId;  // 로그인한 사용자의 ID
//     const cartItems = await Cart.find({ userId }); 
//     // const cartItems = await Cart.find({ UserId: userId });
//     res.json(cartItems);
//   } catch (err) {
//     console.error('장바구니 조회 오류:', err);
//     res.status(500).send('장바구니 조회에 실패했습니다.');
//   }
// };

// 장바구니 조회
const getMdCartItems = async (req, res) => {
  try {
    const userId = req.userId;  
    const mdCartItems = await MdCart.find({ userId }).populate('mdProduct');
    
    if (!mdCartItems || mdCartItems.length === 0) {
      return res.status(404).send('MD 상품 장바구니에 담긴 상품이 없습니다.');
    }

    res.json(mdCartItems);  
  } catch (err) {
    console.error('MD 장바구니 조회 오류:', err);
    res.status(500).send('MD 상품 장바구니 조회에 실패했습니다.');
  }
};

// 장바구니에 상품 추가
const addToMdCart = async (req, res) => {
  const { productId, quantity } = req.body;
  // const userId = req.userId; 

  try {
    let cartItem = await Cart.findOne({ userId, mdProduct: productId });

    if (cartItem) {
      // 상품이 이미 장바구니에 있으면 수량만 업데이트
      cartItem.quantity += quantity;
      await cartItem.save();
      return res.status(200).json({ message: '수량이 업데이트되었습니다.' });
    } else {

      const newCartItem = new Cart({
        userId,
        mdProduct: productId,
        quantity,
        // price: "",
        // image: 'image_url',
      });

      await newCartItem.save();
      return res.status(201).json({ message: '상품이 장바구니에 추가되었습니다.' });
    }
  } catch (error) {
    console.error('장바구니 추가 실패:', error);
    res.status(500).json({ message: '장바구니에 상품을 추가하는 데 실패했습니다.' });
  }
};


// 장바구니에서 상품 삭제
const removeFromMdCart = async (req, res) => {
  try {
    // const { mdProductId } = req.params;
    const { mdProductId } = req.body;
    // const userId = req.userId;

    // const deletedItem = await MdCart.findOneAndDelete({ mdProduct: mdProductId, userId });
    const deletedItem = await MdCart.findOneAndDelete({ mdName: mdProductId, userId });
    
    if (!deletedItem) {
      return res.status(404).send('MD 상품이 장바구니에서 삭제되지 않았습니다.');
    }

    res.json({ message: 'MD 상품이 장바구니에서 삭제되었습니다.' });
  } catch (err) {
    console.error('MD 상품 삭제 오류:', err);
    res.status(500).send('MD 상품 삭제에 실패했습니다.');
  }
};

// 장바구니 업데이트 (수량 변경)
const updateMdCartQuantity = async (req, res) => {
  try {
    const { mdProductId, quantity } = req.body; 
    const userId = req.userId;


    if (quantity <= 0) {
      return res.status(400).send('1개 이상 선택해야 합니다.');
    }

    const updatedItem = await MdCart.findOneAndUpdate(
      { mdProduct: mdProductId, userId },  
      { $set: { quantity } },  // 수량 업데이트
      { new: true } 
    );

    if (!updatedItem) {
      return res.status(404).send('MD 상품이 장바구니에 없습니다.');
    }

    res.json(updatedItem); 
  } catch (err) {
    console.error('MD 상품 수량 업데이트 오류:', err);
    res.status(500).send('MD 상품 수량 업데이트에 실패했습니다.');
  }
};


export { getMdCartItems, addToMdCart, removeFromMdCart, updateMdCartQuantity };
