import Rental from "../../models/reservation/rentalSchema.js";
import { parseISO, format, isSameDay, setHours, setMinutes } from "date-fns";

// 예약 생성
export const createReservation = async (req, res) => {
  try {
    console.log("Request Body:", req.body);
    const { userId, spaceId, name, location, rentalPeriod, img } = req.body;

    // rentalPeriod를 날짜와 시간 슬롯으로 변환
    const parsedRentalPeriod = rentalPeriod.map((period) => ({
      date: new Date(period.date),
      timeSlots: period.timeSlots,
    }));

    // 중복 예약 확인
    const existingReservations = await Rental.find({
      spaceId,
      "rentalPeriod.date": { $in: parsedRentalPeriod.map((r) => r.date) },
    });

    if (existingReservations.length > 0) {
      return res.status(400).json({
        message: "이미 예약된 시간대입니다. 다른 시간대를 선택해주세요.",
      });
    }

    const newRental = new Rental({
      spaceId,
      name,
      location,
      rentalPeriod: parsedRentalPeriod,
      img,
      userId,
    });

    await newRental.save();
    res.status(201).json({ message: "Rental created successfully" });
  } catch (error) {
    console.error("Failed to create rental:", error);
    res
      .status(500)
      .json({ message: "Failed to create rental", error: error.message });
  }
};

// 예약된 시간 조회
export const getReservedTimes = async (req, res) => {
  try {
    const { spaceId, date } = req.query;
    const parsedDate = parseISO(date);
    const formattedDate = format(parsedDate, "yyyy-MM-dd");

    const rentals = await Rental.find({
      spaceId,
      "rentalPeriod.date": { $in: [new Date(formattedDate)] },
    });

    const reservedTimes = rentals.flatMap((rental) =>
      rental.rentalPeriod
        .filter((period) => isSameDay(period.date, parsedDate))
        .flatMap((period) => period.timeSlots)
    );
    res.status(200).json(reservedTimes);
  } catch (error) {
    console.error("Failed to retrieve reserved times:", error);
    res.status(500).json({
      message: "Failed to retrieve reserved times",
      error: error.message,
    });
  }
};

// 잔여 대여 시간 조회
export const getAvailableTimes = async (req, res) => {
  try {
    const { spaceId, date } = req.query;
    const parsedDate = parseISO(date);
    const formattedDate = format(parsedDate, "yyyy-MM-dd");

    const rentals = await Rental.find({
      spaceId,
      "rentalPeriod.date": { $in: [new Date(formattedDate)] },
    });

    const reservedTimes = rentals.flatMap((rental) =>
      rental.rentalPeriod
        .filter((period) => isSameDay(period.date, parsedDate))
        .flatMap((period) => period.timeSlots)
    );

    // 1시간 단위로 예약 가능한 모든 시간대 생성
    const allTimes = [];
    for (let i = 8; i <= 22; i++) {
      const time = setHours(setMinutes(new Date(parsedDate), 0), i);
      allTimes.push(time);
    }

    // 예약된 시간을 제외한 가능한 시간을 필터링
    const availableTimes = allTimes.filter(
      (time) =>
        !reservedTimes.some(
          (reservedTime) => new Date(reservedTime).getTime() === time.getTime()
        )
    );

    res.status(200).json(availableTimes);
  } catch (error) {
    console.error("Failed to retrieve available times:", error);
    res.status(500).json({
      message: "Failed to retrieve available times",
      error: error.message,
    });
  }
};
