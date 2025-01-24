import VodInput from "../../models/vod/vodShowuVideoInputSchema.js";


const addVodComment = async (req, res) => {
  const {id}=req.params;
  const {myComment, myChoice, myChoicemanImage } = req.body;
  // console.log("Request Body:", req.body);

  if (!myComment || !myChoice || !myChoicemanImage) {
    return res.status(400).json({ message: "모든 필드를 입력해주세요." });
  }

  try {
    const newComment = new VodInput({
      videoID : id,
      usersId: req.user._id,
      myComment,
      myChoice,
      myChoicemanImage,
    });

    await newComment.save();
    const saveComment = await VodInput.findById(newComment._id).populate("usersId", "name email _id");
    res.status(201).json({ message: "댓글이 추가되었습니다.", myComment: saveComment });
  } catch (error) {
    res.status(500).json({ message: "댓글 추가 중 오류 발생", error: error.message });
  }
};

const deleteVodComment = async (req, res) => {
  const { id } = req.params;

  try {
    const comment = await VodInput.findById(id);
    if (!comment) {
      return res.status(404).json({ message: "댓글을 찾을 수 없습니다." });
    }

    if (comment.usersId.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "삭제 권한이 없습니다." });
    }

    await comment.deleteOne();
    res.status(200).json({ message: "댓글이 삭제되었습니다." });
  } catch (error) {
    res.status(500).json({ message: "서버 오류 발생", error: error.message });
  }
};

// 댓글 조회
const getVodCommentsByVideoId = async (req, res) => {
  const { id } = req.params;


  try {
    const comments = await VodInput.find({videoID: id })
      .populate("usersId", "email name _id")
      .sort({ mycreatedAt: -1 });
    res.status(200).json({
      comments
    });
  } catch (error) {
    res.status(500).json({ message: "서버 오류 발생", error: error.message });
  }
};


// 유저 찾기기
const getUserId=async(req,res)=>{
  try{
    const userId=req.user._id
    res.status(200).json({
      userId
    });
  }catch(error){
    res.status(500).json({ message: "서버 오류 발생", error: error.message });
  }
}


const updateVodComment = async (req, res) => {
  const { id } = req.params;
  const { myComment } = req.body;
  console.log(id)
  console.log(myComment)

  if (!myComment || !myComment.trim()) {
    return res.status(400).json({ message: "수정할 내용을 입력해주세요." });
  }

  try {
    const comment = await VodInput.findById(id);
    if (!comment) {
      return res.status(404).json({ message: "댓글을 찾을 수 없습니다." });
    }

    if (comment.usersId.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "수정 권한이 없습니다." });
    }

    comment.myComment = myComment;
    comment.updatedAt = new Date();
    const updatedComment = await comment.save();

    res.status(200).json(updatedComment);
  } catch (error) {
    res.status(500).json({ message: "댓글 수정 중 오류 발생", error: error.message });
  }
};



export { addVodComment, deleteVodComment, getVodCommentsByVideoId, updateVodComment,getUserId };
