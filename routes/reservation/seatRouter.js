import express from "express";
import {
  createSeatReservation,
  getReservedSeats,
  getAvailableSeats,
} from "../../controller/reservation/seatController.js";

const seatRouter = express.Router();

seatRouter.post("/reserve", createSeatReservation);
seatRouter.get("/reservedSeats", getReservedSeats);
seatRouter.get("/availableSeats", getAvailableSeats);

export default seatRouter;
