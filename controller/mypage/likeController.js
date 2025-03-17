import Like from "../../models/reservation/likeSchema.js";
import Show from "../../models/reservation/showSchema.js";
import Space from "../../models/reservation/spaceSchema.js";
import Auction from "../../models/shop/auctionSchema.js";
import Md from "../../models/shop/mdSchema.js";
import TeamMatching from "../../models/showu/teamMatchingSchema.js";

//md 좋아요한 상품 가져오기
const likeMd = async (req, res) => {
  const UserId = req.user._id;
  console.log("로그인한 사용자 id :", UserId)

  try {
    //사용자가 찜한 상품 조회
    const likedMdList = await Md.find({ isHearted : UserId })
    console.log("likedMdList", likedMdList)
    
    const likedMd = likedMdList.map((like) => ({
      mdName: like.mdName,
      price: like.price,
      image: like.image,
    }))

    console.log("찜한 md 리스트: ", likedMd)

    return res.status(200).json({
      foundLikeMdSuccess : true,
      message : "성공적으로 찜한 md를 가져왔습니다.",
      likedMd : likedMd
    })
  } catch (error) {
    return res.status(500).json({
      foundLikeMdSuccess : false,
      message : "찜한 md를 가져오는데 실패했습니다."
    })
  }

}


// 경매 찜한 상품 내역 불러오기
const likeAuction= async (req, res) => {
  const userId = req.user._id;
  console.log("로그인한 사용자: ", userId)

  try {
    const likedAuctionList = await Auction.find({ isHearted : userId });
    console.log("찜한 경매 리스트 : ", likedAuctionList);

     const likedAuction = likedAuctionList.map((like) => ({
      auctionName : like.auctionName,
      image : like.image,
      count : like.count,
      time : like.time
     }))

    return res.status(200).json({
      foundLikeAuctoinSuccess : true,
      message : "성공적으로 찜한 경매를 가져왔습니다.",
      likedAuction : likedAuction
    })

  } catch (error) {
    return res.status(500).json({
      foundLikeAuctoinSuccess : false,
      message : "찜한 경매를 가져오는데 실패했습니다.",
    })
    
  }
}

// 찜한 공간 대여 목록 불러오기
const likeSpace = async (req, res) => {
  const userId = req.user._id
  // console.log("로그인한 사용자: ", userId)

  try {
    // 예약대여 좋아요한 상품 리스트
    const likedReservationList = await Like.find({ user : userId })
    // console.log("예약대여 좋아요한 상품 리스트 : ", likedReservationList)
    
    // 좋아요한 공간 대여 정보 id 리스트
    const spaceIdList = await likedReservationList.map((space) => ({
      spaceId : space.spaceId
    }))
      .filter(item => item.spaceId !== null)
    // console.log("좋아요한 공간 대여 정보 id 리스트 : ", spaceIdList)

    // spaceId만 가져오기
    const spaceId = await spaceIdList.map((item) => item.spaceId)
    
    // spaceId 일치하는 공간 대여 정보 가져오기
    const likeSpaceList = await Space.find({ _id: { $in: spaceId }})
    console.log("spaceId 일치하는 공간 대여 정보 리스트 : ", likeSpaceList)

    // 마이페이지에 필요한 공간 대여 정보
    const likeSpace = await likeSpaceList.map((like) => ({
      name : like.name,
      location : like.location,
      price : like.price,
      img : like.img
    }))

    console.log("마이페이지에 필요한 공간 대여 정보 리스트 : ", likeSpace)

    return res.status(200).json({
      likeSpaceSuccess : true,
      message : "성공적으로 찜한 공간 대여 목록을 가져왔습니다",
      likeSpace : likeSpace
    })
    
  } catch (error) {
    return res.status(500).json({
      likeSpaceSuccess : false,
      message : "찜한 공간 대여 목록을 가져오는데 실패했습니다"
    })
  }
  
}


// 찜한 팀 목록 가져오기
const likeTeam = async (req, res) => {
  const userId = req.user._id;

  try {
    const likeList = await TeamMatching.find({ likedUsers : userId })
    console.log("유저가 좋아요한 팀 매칭 리스트 : ", likeList)

    // const myLikeTeam = await likeList.map((team) => ({
    //   teamName : team.teamName,
    //   category : team.category,
    //   teamTitle : team.teamTitle,
    //   teamThumbnail : team.teamThumbnail
    // }))

    // console.log("마이페이지에 필요한 좋아요 팀 매칭 정보 : ", myLikeTeam)

    return res.status(200).json({
      likeTeamSuccess : true,
      message : "찜한 팀 목록을 성공적으로 가져왔습니다",
      myLikeTeam : likeList
    })
  } catch (error) {
    return res.status(500).json({
      likeTeamSuccess : false,
      message : "찜한 팀 목록을 가져오는데 실패했습니다"
    })
    
  }  
}

// const likeLesson = async (req, res) => {
//   const userId = req.user._id;

//   try {
//     const likeList = await Lesson.find({ likeUser : userId })
//     console.log("유저가 좋아요한 레슨 리스트 : ", likeList)

//     const myLikeLesson = await likeList.map((lesson) => ({
//       lessonName : lesson.lessonName,
//       category : lesson.category,
//       lessonThumbnail : lesson.lessonThumbnail
//     }))

//     console.log("마이페이지에 필요한 좋아요 레슨 정보 : ", myLikeLesson)

//     return res.status(200).json({
//       likeTeamSuccess : true,
//       message : "찜한 레슨 목록을 성공적으로 가져왔습니다",
//       myLikeLesson : myLikeLesson
//     })
//   } catch (error) {
//     return res.status(500).json({
//       likeTeamSuccess : false,
//       message : "찜한 레슨 목록을 가져오는데 실패했습니다"
//     })
    
//   } 
// }

const likeTicket = async (req, res) => {
  const userId = req.user._id
  console.log("로그인한 사용자: ", userId)

  try {
    // 예약대여 좋아요한 상품 리스트
    const likedReservationList = await Like.find({ user : userId })
    // console.log("예약대여 좋아요한 상품 리스트 : ", likedReservationList)
    
    // 좋아요한 티켓 정보 id 리스트
    const showIdList = await likedReservationList.map((ticket) => ({
      showId : ticket.showId
    }))
      .filter(item => item.showId !== null)
    // console.log("좋아요한 티켓 정보 id 리스트 : ", showIdList)

    // showId만 가져오기
    const showId = await showIdList.map((item) => item.showId)
    
    // showId 일치하는 티켓 정보 가져오기
    const likeTicketList = await Show.find({ _id: { $in: showId }})
    console.log("showId 일치하는 공간 대여 정보 리스트 : ", likeTicketList)

    // 마이페이지에 필요한 티켓 예매 정보
    const likeTicket = await likeTicketList.map((like) => ({
      name : like.name,
      venue : like.venue,
      dates : like.dates,
      img : like.img,
      id : like.id
    }))

    console.log("마이페이지에 필요한 티켓 예매 정보 리스트 : ", likeTicket)

    return res.status(200).json({
      likeSpaceSuccess : true,
      message : "성공적으로 찜한 티켓 예매 목록을 가져왔습니다",
      likeTicket : likeTicket
    })
    
  } catch (error) {
    return res.status(500).json({
      likeSpaceSuccess : false,
      message : "찜한 티켓 예매 목록을 가져오는데 실패했습니다"
    })
  }
}

export { likeMd, likeAuction, likeSpace, likeTeam, likeTicket }