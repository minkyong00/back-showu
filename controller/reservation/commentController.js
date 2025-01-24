import Comment from "../../models/reservation/commentSchema.js";
import Show from "../../models/reservation/showSchema.js";
import { getCurrentTime } from "../../utils/utils.js"; // getCurrentTime 함수 임포트

// 댓글 추가
export const addComment = async (req, res) => {
  try {
    const { id } = req.params; // 쇼 ID
    const { userId, text } = req.body; // 사용자 ID와 댓글 내용

    // 새로운 댓글 생성
    const newComment = new Comment({
      user: userId,
      showId: id,
      text,
      createdAt: getCurrentTime(),
      updatedAt: getCurrentTime(),
    });

    await newComment.save(); // MongoDB에 댓글 저장

    // 쇼에 댓글 추가
    await Show.findByIdAndUpdate(id, { $push: { comments: newComment._id } });

    // 모든 댓글 조회
    const comments = await Comment.find({ showId: id }).populate(
      "user",
      "name"
    );
    res.status(200).json(comments); // 클라이언트에 댓글 목록 반환
  } catch (error) {
    console.error("Add comment error:", error);
    res
      .status(500)
      .json({ message: "Add comment error", error: error.message });
  }
};

// 댓글 수정
export const editComment = async (req, res) => {
  try {
    const { id, commentId } = req.params;
    const { text } = req.body;
    const comment = await Comment.findById(commentId);
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    comment.text = text;
    comment.updatedAt = getCurrentTime(); // 수정 시간 업데이트
    await comment.save();

    const comments = await Comment.find({ showId: id }).populate(
      "user",
      "name"
    );
    res.status(200).json(comments);
  } catch (error) {
    console.error("Edit comment error:", error);
    res
      .status(500)
      .json({ message: "Edit comment error", error: error.message });
  }
};

// 댓글 삭제
export const deleteComment = async (req, res) => {
  try {
    const { id, commentId } = req.params;
    const comment = await Comment.findById(commentId);
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    await comment.deleteOne();
    const comments = await Comment.find({ showId: id }).populate(
      "user",
      "name"
    );
    res.status(200).json(comments);
  } catch (error) {
    console.error("Delete comment error:", error);
    res
      .status(500)
      .json({ message: "Delete comment error", error: error.message });
  }
};
