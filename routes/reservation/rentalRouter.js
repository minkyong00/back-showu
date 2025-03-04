import express from "express";
import {
  createReservation,
  getReservedTimes,
  getAvailableTimes,
} from "../../controller/reservation/rentalController.js";

const rentalRouter = express.Router();

rentalRouter.post("/reservations", createReservation);
rentalRouter.get("/reservedTimes", getReservedTimes);
rentalRouter.get("/availableTimes", getAvailableTimes);

export default rentalRouter;
