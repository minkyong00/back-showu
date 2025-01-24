import Show from "../../models/reservation/showSchema.js";
import Space from "../../models/reservation/spaceSchema.js";
import TicketEvent from "../../models/reservation/ticketEventSchema.js";
import mongoose from "mongoose";

// 특정 티켓 이벤트 가져오기
export const getTicketEventById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Received id:", id); // id 출력
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "유효하지 않은 ID 형식입니다." });
    }
    const event = await TicketEvent.findById(id);
    if (!event) {
      return res.status(404).json({ message: "이벤트를 찾을 수 없습니다." });
    }
    res.status(200).json(event);
  } catch (error) {
    console.error("티켓 이벤트를 가져오는 중 오류 발생:", error);
    res
      .status(500)
      .json({
        message: "티켓 이벤트를 가져오는 중 오류 발생",
        error: error.message,
      });
  }
};

// 모든 티켓 이벤트 가져오기
export const getAllTicketEvents = async (req, res) => {
  try {
    const ticketEvents = await TicketEvent.find();
    res.status(200).json(ticketEvents);
  } catch (error) {
    console.error("티켓 이벤트를 가져오는 중 오류 발생:", error);
    res
      .status(500)
      .json({
        message: "티켓 이벤트를 가져오는 중 오류 발생",
        error: error.message,
      });
  }
};

// 특정 공연(show) 가져오기
export const getShowById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "유효하지 않은 ID 형식입니다." });
    }
    const show = await Show.findById(id).populate([
      {
        path: "comments",
        populate: {
          path: "user",
          select: "name",
        },
      },
      {
        path: "hearts",
        populate: {
          path: "user",
          select: "name",
        },
      },
    ]);
    if (!show) {
      return res.status(404).json({ message: "쇼를 찾을 수 없습니다." });
    }
    console.log("Fetched Show:", show); // 콘솔 로그 추가
    res.status(200).json(show);
  } catch (error) {
    console.error("쇼를 가져오는 중 오류 발생:", error);
    res
      .status(500)
      .json({ message: "쇼를 가져오는 중 오류 발생", error: error.message });
  }
};

// 모든 공연 가져오기
export const getAllShows = async (req, res) => {
  try {
    const shows = await Show.find();
    res.status(200).json(shows);
  } catch (error) {
    console.error("공연 데이터를 가져오는 중 오류 발생:", error);
    res
      .status(500)
      .json({
        message: "공연 데이터를 가져오는 중 오류 발생",
        error: error.message,
      });
  }
};

// 모든 공간 데이터 가져오기
export const getAllSpaces = async (req, res) => {
  try {
    const spaces = await Space.find();
    res.status(200).json(spaces);
  } catch (error) {
    console.error("공간 데이터를 가져오는 중 오류 발생:", error);
    res
      .status(500)
      .json({
        message: "공간 데이터를 가져오는 중 오류 발생",
        error: error.message,
      });
  }
};

// 특정 공간 데이터 가져오기
export const getSpaceById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "유효하지 않은 ID 형식입니다." });
    }
    const space = await Space.findById(id);
    if (!space) {
      return res.status(404).json({ message: "공간을 찾을 수 없습니다." });
    }
    res.status(200).json(space);
  } catch (error) {
    console.error("공간 데이터를 가져오는 중 오류 발생:", error);
    res.status(500).json({ message: "공간 데이터를 가져오는 중 오류 발생", error: error.message });
  }
};

