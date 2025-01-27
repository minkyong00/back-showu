import NewsInfo from "../../models/community/newsInfoSchema.js";
import News from "../../models/community/newsSchema.js";

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
    const news = await NewsInfo.findOne({ postId : id }).lean();
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

export { getAllNews, getNewsById };
