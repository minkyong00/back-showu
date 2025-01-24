import Reservation from "../../models/reservation/reservationSchema.js";
import Seat from "../../models/reservation/seatSchema.js";
import Show from "../../models/reservation/showSchema.js";
import Space from "../../models/reservation/spaceSchema.js";

const getTickets = async (req, res) => {
  const userId = req.user._id;
  console.log("로그인한 사용자 id : ", userId)

  try {
    const resesrvationList = await Reservation.find({ user : userId })
    // console.log("로그인한 사용자의 예약 정보 리스트 : ", resesrvationList)

    const ticketList = await resesrvationList.map((ticket) => ({
      showId : ticket.showId
    }))
      .filter(item => item.showId !== null)
    // console.log("예약 정보 중 티켓 정보 리스트 : ", ticketList)

    const ticketId = await ticketList.map((item) => item.showId)
    // console.log("ticketId만 가져오기 : ", ticketId)

    const myTicketList = await Show.find({ _id : { $in : ticketId }})
    // console.log("티켓 아이디와 일치하는 정보 리스트 : ", myTicketList)

    const resTicketList = await myTicketList.map((ticket) => ({
      name : ticket.name,
      venue : ticket.venue,
      dates : ticket.dates,
      img : ticket.img,
      id : ticket.id
    }))
    // console.log("마이페이지에 필요한 티켓 예매 내역 정보 리스트 : ", resTicketList)

    return res.status(200).json({
      ticketsuccess : true,
      message : "티켓 예매 내역을 성공적으로 가져왔습니다",
      resTicketList : resTicketList
    })

  } catch (error) {
    
    return res.status(500).json({
      ticketsuccess : false,
      message : "티켓 예매 내역을 가져오는데 실패했습니다"
    })
    
  }
}


const getTicketsDetail = async (req, res) => {
  const { id } = req.params;
  console.log("id", id)
  const userId = req.user._id;
  console.log("userId", userId)

  try {
    const resesrvationList = await Reservation.find({ user : userId, showId : id }).populate('showId').lean();
    console.log("로그인한 사용자의 예약 정보 리스트 : ", resesrvationList)

    const seatList = await Seat.find({ userId : userId, showId: id }).populate('showId').lean();
    console.log("로그인한 사용자의 좌석 정보 리스트 : ", seatList);

    const resTicketList = await seatList.map((ticket) => ({
      name : ticket.showId.name,
      venue : ticket.showId.venue,
      dates : ticket.showId.dates,
      img : ticket.showId.img,
      id : ticket.showId._id,
      price : ticket.showId.price,
      createdAt : ticket.showId.createdAt,
      seatNumbers : ticket.seatNumbers
    }))
    console.log("마이페이지에 필요한 티켓 예매 내역 정보 리스트 : ", resTicketList)


    return res.status(200).json({
      ticketsuccess : true,
      message : "티켓 예매 상세페이지 정보를 성공적으로 가져왔습니다",
      resTicketList : resTicketList
    })

  } catch (error) {
    
    return res.status(500).json({
      ticketsuccess : false,
      message : "티켓 예매 상세페이지 정보를 가져오는데 실패했습니다"
    })
    
  }
}

// 공간 예매 내역
const getSpaces = async (req, res) => {
  const userId = req.user;
  
  try {
    const resesrvationList = await Reservation.find({ user : userId })
    // console.log("로그인한 사용자의 예약 정보 리스트 : ", resesrvationList)

    const spaceList = await resesrvationList.map((space) => ({
      spaceId : space.spaceId
    }))
      .filter(item => item.spaceId !== null)
      .map((item) => item.spaceId)
    // console.log("예약 정보에서 spaceId만 가져오기 : ", spaceList)

    const mySpaceList = await Space.find({ _id : { $in : spaceList }})
    // console.log("공간 아이디와 일치하는 정보 리스트 : ", mySpaceList)

    const resSpaceList = await mySpaceList.map((space) => ({
      name : space.name,
      location : space.location,
      price : space.price,
      img : space.img
    }))
    console.log("마이페이지에 필요한 공간 대여 내역 정보 : ", resSpaceList)

    return res.status(200).json({
      spaecSuccess : true,
      message : "공간 예약 내역을 성공적으로 가져왔습니다",
      resSpaceList : resSpaceList
    })

  } catch (error) {
    return res.status(500).json({
      spaecSuccess : false,
      message : "공간 예약 내역을 가져오는데 실패했습니다"
    })
  }
}

export { getTickets, getTicketsDetail, getSpaces }