import TeamMatching from "../../models/showu/teamMatchingSchema.js";
// import Upgrade from "../../models/users/upgradeSchema.js";
import User from "../../models/users/userSchema.js";

// const getMainLesson = async (req, res) => {
//   try {
//     const foundLesson = await Lesson.find({}).lean();
//     const foundUser = await Upgrade.find({}).lean();
//     const foundUserName = await User.find({}).lean();

//     // console.log("foundLesson", foundLesson);
//     // console.log("foundUser", foundUser);

//     // Lesson에 Upgrade 정보 추가
//     const enrichedLessons = foundLesson.map(lesson => {
//       const userInfo = foundUser.find(user => user.exportName?.toString() === lesson.userId?.toString());
//       const userName = foundUserName.find(user => user._id?.toString() === lesson.userId?.toString());
//       // 사용자 정보를 lesson에 추가
//       return {
//         ...lesson,
//         userInfo: userInfo || null,
//         userName: userName || null
//       };
//     });

//     // console.log("enrichedLessons", enrichedLessons)

//     res.status(200).json({
//       mainLessonSuccess: true,
//       message: "성공적으로 lesson을 가져왔습니다",
//       LessonList: enrichedLessons,
//     });
//   } catch (error) {
//     console.error("getMainLesson error:", error);

//     res.status(500).json({
//       mainLessonSuccess: false,
//       message: "lesson을 가져오는데 실패했습니다",
//     });
//   }
// };

const getMainTeam = async (req, res) => {
  try {
    const foundTeam = await TeamMatching.find({}).lean();
    const foundUserName = await User.find({}).lean();

    console.log("foundTeam", foundTeam);
    console.log("foundUserName", foundUserName);

    // team에 유저 정보 추가
    const enrichedTeams = foundTeam.map(team => {
      const userName = foundUserName.find(user => user._id.toString() === team.teamLeader.toString());
      // 사용자 정보를 team에 추가
      return {
        ...team,
        userName: userName || null
      };
    });

    console.log("enrichedTeams", enrichedTeams)

    res.status(200).json({
      mainTeamSuccess: true,
      message: "성공적으로 team을 가져왔습니다",
      teamList: enrichedTeams,
    });
  } catch (error) {
    console.error("getMainTeam error:", error);

    res.status(500).json({
      mainTeamSuccess: false,
      message: "team을 가져오는데 실패했습니다",
    });
  }
}

export { getMainTeam };
