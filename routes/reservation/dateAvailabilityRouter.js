import express from "express";
import {
  seedDateAvailabilityData,
  getAllDateAvailabilities,
} from "../../controller/reservation/dateAvailabilityController.js";

const dateAvailabilityRouter = express.Router();

dateAvailabilityRouter.post("/seed", seedDateAvailabilityData); // 초기 데이터 삽입
dateAvailabilityRouter.get("/", getAllDateAvailabilities); // 모든 DateAvailability 데이터 조회

export default dateAvailabilityRouter;
