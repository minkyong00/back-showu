import Reservation from "../../models/reservation/reservationSchema.js";

// 결제 내역 저장
const addReservation = async (req, res) => {
  const {
    id,
    spaceId,
    showId,
    user,
    reservationDate,
    reservationTime,
    totalAmount,
    discountsApplied,
  } = req.body;
  try {
    const reservation = new Reservation({
      id,
      spaceId,
      showId,
      user,
      reservationDate,
      reservationTime,
      totalAmount,
      discountsApplied,
    });
    await reservation.save();
    res.status(201).json({ message: "결제 내역이 저장되었습니다!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "결제 내역 저장 중 오류 발생", error: error.message });
  }
};

// 유저가 결제한 공간 내역 조회
const getReservedSpaces = async (req, res) => {
  const { userId } = req.params;
  try {
    const reservedSpaces = await Reservation.find({
      user: userId,
      spaceId: { $ne: null },
    }).populate("spaceId");
    const spaces = reservedSpaces.map((reservation) => ({
      name: reservation.spaceId.name,
      location: reservation.spaceId.location,
      price: reservation.spaceId.price,
      img: reservation.spaceId.img,
      reservationDate: reservation.reservationDate,
      reservationTime: reservation.reservationTime,
      totalAmount: reservation.totalAmount,
    }));

    res.status(200).json(spaces);
  } catch (error) {
    res
      .status(500)
      .json({ message: "결제한 공간 조회 중 오류 발생", error: error.message });
  }
};

// 유저가 결제한 공연 내역 조회
const getReservedShows = async (req, res) => {
  const { userId } = req.params;
  try {
    const reservedShows = await Reservation.find({
      user: userId,
      showId: { $ne: null },
    }).populate("showId");
    const shows = reservedShows.map((reservation) => ({
      name: reservation.showId.name,
      venue: reservation.showId.venue,
      dates: reservation.showId.dates,
      img: reservation.showId.img,
      reservationDate: reservation.reservationDate,
      reservationTime: reservation.reservationTime,
      totalAmount: reservation.totalAmount,
    }));

    res.status(200).json(shows);
  } catch (error) {
    res
      .status(500)
      .json({ message: "결제한 공연 조회 중 오류 발생", error: error.message });
  }
};

// 모든 예약 내역 조회 (추가)
const getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find()
      .populate("spaceId")
      .populate("showId");
    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({
      message: "모든 예약 내역 조회 중 오류 발생",
      error: error.message,
    });
  }
};

export {
  addReservation,
  getReservedSpaces,
  getReservedShows,
  getAllReservations,
};
