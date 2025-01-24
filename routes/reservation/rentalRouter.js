import express from "express";
import {
  createReservation,
  getReservedTimes,
  getAvailableTimes,
} from "../../controller/reservation/rentalController.js";

const rentalRouter = express.Router();

rentalRouter.post("/reservations", createReservation);
rentalRouter.get("/reservations/times", getReservedTimes);
rentalRouter.get("/reservations/availableTimes", getAvailableTimes);

export default rentalRouter;
