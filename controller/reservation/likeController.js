import Like from "../../models/reservation/likeSchema.js";
import Show from "../../models/reservation/showSchema.js";
import Space from "../../models/reservation/spaceSchema.js";

export const toggleLike = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId, type } = req.body;
    let item;

    if (type === "show") {
      item = await Show.findById(id);
      if (!item) {
        return res.status(404).json({ message: "Show not found" });
      }
    } else if (type === "space") {
      item = await Space.findById(id);
      if (!item) {
        return res.status(404).json({ message: "Space not found" });
      }
    } else {
      return res.status(400).json({ message: "Invalid type provided" });
    }

    const like = await Like.findOne({ user: userId, [`${type}Id`]: id });

    if (like) {
      // 이미 좋아요를 눌렀다면 제거
      await Like.deleteOne({ _id: like._id });
      res.status(200).json({ message: "Like toggled released successfully" });
    } else {
      // 좋아요 추가
      const newLike = new Like({
        user: userId,
        [`${type}Id`]: id,
      });
      await newLike.save();
      res.status(200).json({ message: "Like toggled successfully" });
    }
  } catch (error) {
    console.error("Toggle like error:", error);
    res
      .status(500)
      .json({ message: "Toggle like error", error: error.message });
  }
};

export const checkLikeStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId, type } = req.query; // 쿼리에서 userId와 type을 받습니다.

    let like;
    if (type === "space") {
      like = await Like.findOne({ user: userId, spaceId: id });
    } else if (type === "show") {
      like = await Like.findOne({ user: userId, showId: id });
    } else {
      return res.status(400).json({ message: "Invalid type provided" });
    }

    if (like) {
      res.status(200).json({ isFavorite: true });
    } else {
      res.status(200).json({ isFavorite: false });
    }
  } catch (error) {
    console.error("좋아요 상태 확인 중 오류 발생:", error);
    res
      .status(500)
      .json({ message: "좋아요 상태 확인 중 오류 발생", error: error.message });
  }
};
