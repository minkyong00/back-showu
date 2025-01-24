// 커뮤니티 댓글 컨트롤러

import Community from "../../models/community/communitySchema.js";
import CommunityComment from "../../models/community/communityCommentSchema.js";

// 게시물과 댓글 함께 반환 
const getCommunityWithComments = async (req, res) => {
  const { id } = req.params; 

  try {
    // 게시물 데이터 조회
    const community = await Community.findById(id);
    if (!community) {
      return res.status(404).json({ message: "게시물을 찾을 수 없습니다." });
    }

    // 댓글 데이터 조회 
    const comments = await CommunityComment.find({ postId: id })
      .populate("user", "name email")
      .sort({ createdAt: -1 }); // 최신순 

    res.status(200).json({
      community,
      comments,
    });
  } catch (error) {
    res.status(500).json({ message: "데이터 조회 중 오류 발생", error: error.message });
  }
};


// 댓글 추가
const addComment = async (req, res) => {
  const { id } = req.params; // 게시물 ID
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ message: "댓글 내용을 입력해주세요." });
  }

  try {
    const newComment = new CommunityComment({
      postId: id,
      user: req.user._id,
      content,
    });

    await newComment.save();

    const savedComment = await CommunityComment.findById(newComment._id).populate("user", "name email");

    res.status(201).json({ message: "댓글이 추가되었습니다.", comment: savedComment });
  } catch (error) {
    res.status(500).json({ message: "댓글 추가 중 오류 발생", error: error.message });
  }
};

// 댓글 삭제
const deleteComment = async (req, res) => {
  const { commentId } = req.params;

  try {
    const comment = await CommunityComment.findById(commentId);
    if (!comment) {
      return res.status(404).json({ message: "댓글을 찾을 수 없습니다." });
    }

    if (comment.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "삭제 권한이 없습니다." });
    }

    await comment.deleteOne();
    res.status(200).json({ message: "댓글이 삭제되었습니다." });
  } catch (error) {
    res.status(500).json({ message: "서버 오류 발생", error: error.message });
  }
};

// 댓글 조회
const getCommentsByPostId = async (req, res) => {
  const { id } = req.params;

  try {
    const comments = await CommunityComment.find({ postId: id })
      .populate("user", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: "서버 오류 발생", error: error.message });
  }
};

// 댓글 수정 
const updateComment = async (req, res) => {
  const { commentId } = req.params;
  const { content } = req.body;

  if (!content || !content.trim()) {
    return res.status(400).json({ message: "수정할 내용을 입력해주세요." });
  }

  try {
    const comment = await CommunityComment.findById(commentId);
    if (!comment) {
      return res.status(404).json({ message: "댓글을 찾을 수 없습니다." });
    }

    // 권한 확인
    if (comment.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "수정 권한이 없습니다." });
    }

    // 댓글 수정
    comment.content = content;
    comment.updatedAt = new Date();
    const updatedComment = await comment.save();

    res.status(200).json(updatedComment);
  } catch (error) {
    res.status(500).json({ message: "댓글 수정 중 오류 발생", error: error.message });
  }
};




export { addComment, deleteComment, getCommentsByPostId, getCommunityWithComments, updateComment };
