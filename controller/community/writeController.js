import Community from "../../models/community/communitySchema.js";
import path from "path";

const commuCreatePost = async (req, res) => {
  const userId = req.user._id;
  const { title, content, category, imageUrl } = req.body;
  // const foundUser = await Community.findOne({ UserId : userId }).lean();

  const uploadFolder = "uploads/community/post";
  console.log("req.files", req)
  const relativePath = path.join(uploadFolder, req.file.filename).replaceAll("\\", "/")

  const createCommunityPost = await Community.create({
    UserId : userId,
    title : title,
    content : content,
    category : category,
    imageUrl : relativePath
  })

  return res.status(200).json({
    createSuccess : true,
    message : "커뮤니티 글 쓰기가 완료되었습니다.",
    createCommunityPost : createCommunityPost,
    filePath : `/${relativePath}`
  })
} 

const commuUpdatePost = async (req, res) => {
  const userId = req.user._id;
  const { title, content, category, imageUrl } = req.body;
  const { id } = req.params;
  // const foundUser = await Community.findOne({ UserId : userId, _id : id }).lean();

  const uploadFolder = "uploads/community/post";
  console.log("req.files", req)
  const relativePath = path.join(uploadFolder, req.file.filename).replaceAll("\\", "/")

  const updateCommunityPost = await Community.updateOne(
    { UserId : userId, _id : id },
    {
      UserId : userId,
      title : title,
      content : content,
      category : category,
      imageUrl : relativePath
    }
  )

  return res.status(200).json({
    createSuccess : true,
    message : "커뮤니티 글 수정이 완료되었습니다.",
    updateCommunityPost : updateCommunityPost,
    filePath : `/${relativePath}`
  })
}

const getCommuPost = async (req, res) => {
  const { id } = req.params;
  console.log("id", id)
  const userId = req.user._id;
  console.log("userId", userId)

  try {
    const foundPost = await Community.find({ _id : id, UserId : userId }).lean();
    console.log("foundPost", foundPost)

    return res.status(200).json({
      message : "성공적으로 커뮤니티 글 목록을 가져왔습니다.",
      commuPost : foundPost
    })
  } catch (error) {
    return res.status(500).json({
      message : "커뮤니티 글 목록을 가져오는데 실패했습니다.",
    })
  }
}

// 글 작성 핸들러
// const createCommunityPost = async (req, res) => {
//   if (!req.user) {
//     return res.status(401).json({ message: "사용자가 인증되지 않았습니다." });
//   }

//   const { title, category, content } = req.body;
//   const imageUrl = req.file ? `/uploads/communityWrites/${req.file.filename}` : "";

//   if (!title || !category || !content) {
//     return res.status(400).json({ message: "모든 필드를 입력해주세요." });
//   }

//   try {
//     const newPost = new Community({
//       userId: req.user._id,
//       title,
//       category,
//       content,
//       imageUrl,
//       createdAt: new Date().toISOString(),
//     });

//     await newPost.save();
//     res.status(201).json({ message: "게시글이 작성되었습니다.", post: newPost });
//   } catch (error) {
//     console.error("게시글 작성 중 오류:", error);
//     res.status(500).json({ message: "서버 오류" });
//   }
// };

export const uploadFile = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "파일이 업로드되지 않았습니다." });
  }

  const fileUrl = `/uploads/communityWrites/${req.file.filename}`;
  res.status(200).json({ url: fileUrl });
};

// 모든 글 가져오기
const getAllCommunityPosts = async (req, res) => {
  // Multer 처리
  upload(req, res, async (err) => {
    if (err) {
      console.error("파일 업로드 오류:", err);
      return res.status(400).json({ message: "파일 업로드 오류", error: err.message });
    }

    const fileUrl = req.file ? `/uploads/communityWrites/${req.file.filename}` : null;

    let { page = 1, limit = 10 } = req.query;

    page = Math.max(parseInt(page), 1);
    limit = Math.min(Math.max(parseInt(limit), 1), 100);

    const skip = (page - 1) * limit;

    try {
      const posts = await Community.find()
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit);

      const totalPosts = await Community.countDocuments();

      res.status(200).json({
        success: true,
        posts,
        totalPosts,
        totalPages: Math.ceil(totalPosts / limit),
        currentPage: page,
        fileUploaded: fileUrl, 
      });
    } catch (error) {
      console.error("모든 게시물 가져오기 오류:", error);
      res.status(500).json({ success: false, message: "커뮤니티 데이터를 가져오는 데 실패했습니다." });
    }
  });
};



// 특정 글 조회 핸들러
const getCommunityPostById = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Community.findById(id);
    if (!post) {
      return res.status(404).json({ message: "글을 찾을 수 없습니다." });
    }
    res.status(200).json(post);
  } catch (error) {
    console.error("특정 글 가져오기 오류:", error);
    res.status(500).json({ message: "글을 가져오는 데 실패했습니다." });
  }
};

// 글 수정 핸들러
const updateCommunityPost = async (req, res) => {
  const { id } = req.params;
  const { title, category, content } = req.body;
  const imageUrl = req.file ? `/uploads/communityWrites/${req.file.filename}` : null;

  if (!title || !category || !content) {
    return res.status(400).json({ message: "모든 필드를 입력해주세요." });
  }

  try {
    const updateFields = { title, category, content };
    if (imageUrl) updateFields.imageUrl = imageUrl;

    const post = await Community.findOneAndUpdate(
      { _id: id, userId: req.user._id },
      updateFields,
      { new: true }
    );

    if (!post) {
      return res.status(404).json({ message: "글을 찾을 수 없습니다." });
    }

    res.status(200).json({ message: "글이 수정되었습니다.", post });
  } catch (error) {
    console.error("글 수정 중 오류:", error);
    res.status(500).json({ message: "글 수정 중 오류가 발생했습니다." });
  }
};

// 글 삭제 핸들러
const deleteCommunityPost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Community.findOneAndDelete({ _id: id, userId: req.user._id });
    if (!post) {
      return res.status(404).json({ message: "글을 찾을 수 없습니다." });
    }

    res.status(200).json({ message: "글이 삭제되었습니다." });
  } catch (error) {
    console.error("글 삭제 중 오류:", error);
    res.status(500).json({ message: "글 삭제 중 오류가 발생했습니다." });
  }
};

export {
  getAllCommunityPosts,
  getCommunityPostById,
  updateCommunityPost,
  deleteCommunityPost,
  commuCreatePost,
  commuUpdatePost,
  getCommuPost
};
