import ShowuVideo from "../../models/vod/showuVideoSchema.js";
import VodShowuVideo from "../../models/vod/vodShowuVideo.js";

// 구독한 리스트 내역 불러오기
const vodSubscript = async (req, res) => {
  // console.log("req.user", req.user._id)
  const userId  = req.user._id;
  console.log("로그인한 사용자 : ", userId)

  try {
    const vodSubscriptList = await VodShowuVideo.find({ likedUsers : userId });
    console.log("유저가 구독한 vod 정보 리스트 :" , vodSubscriptList)

    // const likedUsers = await vodSubscriptList.map((like) => {
    //   likedUser : like.likedUsers
    // })

    // console.log("좋아요한 유저 아이디 가져오기 : ", likedUsers)

    const vodSubscript = await vodSubscriptList.map((like)=> ({
      mainImage : like.mainImage,
      title : like.title
    }))
    
    console.log("마이페이지에서 필요한 vod 정보 : ", vodSubscript)

    return res.status(200).json({
      vodSubscriptSuccess : true,
      message : "성공적으로 vod 구독한 리스트를 가져오는데 가져왔습니다",
      vodSubscript : vodSubscript
    })
  } catch (error) {
    return res.status(500).json({
      vodSubscriptSuccess : false,
      message : "vod 구독한 리스트를 가져오는데 실패했습니다"
    })
  }
}

// 나의 vod 리스트 불러오기
const getMyVod = async (req, res) => {
  const userId = req.user;
  console.log("로그인한 사용자 : ", userId)

  try {
    const vodList = await ShowuVideo.find({ uploaduser : userId })
    console.log("유저와 일치하는 업로드 vod 리스트 : ", vodList)

    const myVodList = await vodList.map((vod) => ({
      title : vod.title,
      category : vod.category,
      themnail : vod.thumbnail
    }))

    console.log("마이페이지에 필요한 나의 vod 정보 : ", myVodList)

    return res.status(200).json({
      myVodSuccess : true,
      message : "나의 vod를 성공적으로 가져왔습니다",
      myVodList : myVodList
    })
    
  } catch (error) {
    return res.status(500).json({
      myVodSuccess : false,
      message : "나의 vod를 성공적으로 가져왔습니다"
    })
  }
}

export { vodSubscript, getMyVod }