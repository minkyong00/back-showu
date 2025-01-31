import NewsInfo from "../../models/community/newsInfoSchema.js";
import News from "../../models/community/newsSchema.js";
import path from "path";


// 전체 뉴스 목록 가져오기 (NewsMain)
const getAllNews = async (req, res) => {
  try {
    const news = await News.find({}, "title category description imageUrl");
    console.log("Fetched News Data:", news);
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ 
      message: "서버에서 데이터를 처리하는 중 오류가 발생했습니다.", 
      error: error.message 
    });
  }
};

// 특정 뉴스 데이터 가져오기 (News)
const getNewsById = async (req, res) => {
  const { id } = req.params;
  console.log("id", id)

  if (!id || !id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(400).json({ message: "유효하지 않은 ID 형식입니다." });
  }

  try {
    const news = await NewsInfo.findOne({ postId : id })
    .populate({
      path: "postId", 
      populate: {
        path: "UserId", 
        model: "User", 
      },
    });

    console.log("news", news)

    if (!news) {
      return res.status(404).json({ message: "해당 뉴스를 찾을 수 없습니다." });
    }
    res.status(200).json({
      message : "뉴스를 성공적으로 가져왔습니다",
      news : news
    });
  } catch (error) {
    res.status(500).json({ 
      message: "서버에서 데이터를 처리하는 중 오류가 발생했습니다.", 
      error: error.message 
    });
  }
};

const createNews = async (req, res) => {
  const userId = req.user._id;
  const { title, name, email, content, imageUrl } = req.body;
  // const foundUser = await Community.findOne({ UserId : userId }).lean();

  const uploadFolder = "uploads/community/news";
  console.log("req.files", req)
  const relativePath = path.join(uploadFolder, req.file.filename).replaceAll("\\", "/")

  const createNewsPost = await News.create({
    UserId : userId,
    title : title,
    name : name,
    email : email,
    content : content,
    imageUrl : relativePath
  })
  console.log("createNewsPost", createNewsPost)

  const createNewsInfoPost = await NewsInfo.create({
    postId : createNewsPost._id,
    title : title,
    content : content,
    imageUrl : relativePath
  })

  console.log("createNewsInfoPost", createNewsInfoPost)

  return res.status(200).json({
    createSuccess : true,
    message : "제보하기가 완료되었습니다.",
    createNewsPost : createNewsPost,
    filePath : `/${relativePath}`
  })
}

const editNews = async (req, res) => {
  const userId = req.user._id;
  const { title, name, email, content, imageUrl } = req.body;
  const { id } = req.params;
  // const foundUser = await Community.findOne({ UserId : userId, _id : id }).lean();

  const uploadFolder = "uploads/community/news";
  console.log("req.files", req)
  const relativePath = path.join(uploadFolder, req.file.filename).replaceAll("\\", "/")

  const updateReportPost = await News.updateOne(
    { UserId : userId, _id : id },
    {
      UserId : userId,
      title : title,
      name : name,
      email : email,
      content : content,
      imageUrl : relativePath
    }
  )
  console.log("updateReportPost", updateReportPost)

  const updateNewsInfoPost = await NewsInfo.updateOne(
    { postId : id },
    {
      postId : updateReportPost._id,
      title : title,
      content : content,
      imageUrl : relativePath
    }
  )
  console.log("updateNewsInfoPost", updateNewsInfoPost)

  return res.status(200).json({
    updateSuccess : true,
    message : "제보하기 글 수정이 완료되었습니다.",
    updateReportPost : updateReportPost,
    updateNewsInfoPost : updateNewsInfoPost,
    filePath : `/${relativePath}`
  })
}

const removeNewsPost = async (req, res) => {
  const { id } = req.params;
  console.log("id", id) //newInfo _id값
  const userId = req.user._id;

  try {
    const foundnewInfo = await NewsInfo.find({ _id : id }).lean();
    const postId = foundnewInfo.map(item => item.postId);
    const foundNew = await News.find({ _id : postId, UserId : userId }).lean();
    console.log("foundnewInfo", foundnewInfo)
    console.log("foundnewInfo.postId", )
    console.log("foundNew", foundNew)

    await News.deleteOne({ _id : postId, UserId : userId })
    await NewsInfo.deleteOne({ _id : id })

    return res.status(200).json({
      message : "성공적으로 글을 삭제했습니다"
    })
  } catch (error) {
    return res.status(200).json({
      message : "글 삭제하는데 실패했습니다"
    }) 
  }
}


export { getAllNews, getNewsById, createNews, editNews, removeNewsPost };
