import DateAvailability from "../../models/reservation/dateAvailabilitySchema.js";

// 초기 데이터 삽입
const seedDateAvailabilityData = async (req, res) => {
  try {
    console.log("기존 데이터를 삭제 중...");
    await DateAvailability.deleteMany({});
    console.log("새 데이터를 삽입 중...");
    // 초기 데이터 예시
    const dateAvailabilityData = [
      // 예시 데이터 추가
    ];
    const inserted = await DateAvailability.insertMany(dateAvailabilityData);
    console.log("삽입된 데이터:", inserted);
    res
      .status(201)
      .json({
        message: "DateAvailability 데이터가 성공적으로 추가되었습니다!",
        inserted,
      });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "DateAvailability 데이터 추가 중 오류 발생",
        error: error.message,
      });
  }
};

// 전체 DateAvailability 데이터 조회
const getAllDateAvailabilities = async (req, res) => {
  try {
    const dateAvailabilities = await DateAvailability.find();
    res.status(200).json(dateAvailabilities);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "DateAvailability 데이터 조회 중 오류 발생",
        error: error.message,
      });
  }
};

export { seedDateAvailabilityData, getAllDateAvailabilities };
