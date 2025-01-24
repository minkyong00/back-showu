import express from "express";
import {
  addReservation,
  getReservedSpaces,
  getReservedShows,
  getAllReservations,
} from "../../controller/reservation/reservationHistoryController.js";

const reservationHistoryRouter = express.Router();

reservationHistoryRouter.post("/add", addReservation); // 결제 내역 저장
reservationHistoryRouter.get("/reserved-spaces/:userId", getReservedSpaces); // 유저가 결제한 공간 내역 조회
reservationHistoryRouter.get("/reserved-shows/:userId", getReservedShows); // 유저가 결제한 공연 내역 조회
reservationHistoryRouter.get("/all", getAllReservations); // 모든 예약 내역 조회

export default reservationHistoryRouter;
