import TeamApply from "../../models/showu/teamApplySchema.js";
import TeamMatching from "../../models/showu/teamMatchingSchema.js";
import TeamMembers from "../../models/showu/teamMembersSchema.js";
import fs from 'fs';
import path from "path";

const getMyTeamMatching = async (req, res) => {
  const userId = req.user._id;
  // console.log("로그인한 사용자 id : ", userId)
  // const { status } = req.params;
  // console.log("req.query", res.params)

  try {
    // 로그인한 사용자와 일치하는 팀 매칭 정보 리스트
    const teamList = await TeamMatching.find({ teamLeader : userId })
    // console.log("팀 매칭 리스트 : ", teamList)

    // 마이페이지에 필요한 팀매칭 완료 정보
    const myCompletedTeamsList = await teamList.map((team) => ({
      _id : team._id,
      teamName : team.teamName,
      teamProfile : team.teamProfile,
      status : team.status,
      teamIntro : team.teamIntro,
      category : team.category,
      deadLine : team.deadLine,
      careerHistory : team.careerHistory
      
    }))
      .filter((item) => item.status === "매칭 완료")

    // 마이페이지에 필요한 팀매칭 완료 정보
    const myWaitingTeamsTeamList = await teamList.map((team) => ({
      _id : team._id,
      teamName : team.teamName,
      teamProfile : team.teamProfile,
      status : team.status,
      teamIntro : team.teamIntro,
      category : team.category,
      deadLine : team.deadLine,
      careerHistory : team.careerHistory
    }))
      .filter((item) => item.status === "매칭 대기")

    // console.log("마이페이지에 필요한 팀 매칭 완료 정보 리스트 :", myCompletedTeamsList)
    // console.log("마이페이지에 필요한 팀 매칭 대기 정보 리스트 :", myWaitingTeamsTeamList)
    
    return res.status(200).json({
      teamMatchingSuccess : true,
      message : "팀 매칭 정보를 성공적으로 가져왔습니다.",
      completedTeams : myCompletedTeamsList,
      waitingTeams : myWaitingTeamsTeamList
    })

  } catch (error) {

    return res.status(500).json({
      teamMatchingSuccess : false,
      message : "팀 매칭 정보를 가져오는데 실패했습니다",
    })
    
  }
}

// 개설한 레슨 목록 가져오기
// const getMyLesson = async (req, res) => {
//   const userId = req.user;
//   // console.log("로그인한 사용자 : ", userId)

//   try {
//     const lessonList = await Lesson.find({ userId : userId })
//     // console.log("로그인한 사용자와 일치하는 레슨 개설 리스트 : ", lessonList)

//     const myLesson = await lessonList.map((lesson) => ({
//       lessonThumbnail : lesson.lessonThumbnail,
//       lessonName : lesson.lessonName
//     }))
//     console.log("마이페이지에 필요한 개설한 레슨 목록 : ", myLesson)

//     return res.status(200).json({
//       lessonSuccess : true,
//       message : "개설한 레슨 목록을 성공적으로 가져왔습니다.",
//       myLesson : myLesson
//     })
//   } catch (error) {
//     return res.status(500).json({
//       lessonSuccess : false,
//       message : "개설한 레슨 목록을 가져오는데 실패했습니다."
//     })
//   }

// }


// // 레슨 상담내역 불러오기
// const getlessonreservation = async (req, res) => {
//   const userId = req.user;
//   console.log("로그인한 사용자 id : ", userId)

//   try {
//     const reservationList = await LessonResevation.find({ userId : userId })
//     console.log("로그인한 사용자와 일치하는 상담 내역 리스트 : ", reservationList)

//     const myLessonReservationList = await reservationList.map((lesson) => ({
//       id : lesson.id,
//       phoneNumber : lesson.phoneNumber,
//       email : lesson.email
//     }))
//       .sort(function(a, b){
//         return a.id - b.id; //id값 오름차순 정렬
//       })

//     console.log("마이페이지에 필요한 레슨 상담 내역 정보 리스트: ", myLessonReservationList)

//     return res.status(200).json({
//       LessonResevationSuccess : true,
//       message : "상담 내역을 성공적으로 가져왔습니다",
//       myLessonReservationList : myLessonReservationList
//     })
    
//   } catch (error) {

//     return res.status(200).json({
//       LessonResevationSuccess : false,
//       message : "상담내역을 가져오는데 실패했습니다",
//     })

//   }
// }

const getTeamMatchingManagment = async (req, res) => {
  const userId = req.user._id;
  console.log("userId", userId)

  try {
    const teamMatchingList = await TeamMatching.find({ teamLeader : userId }).lean();
    console.log("teamMatchingList", teamMatchingList)
    const teamId = await teamMatchingList.map(team => team._id);
    console.log("teamId", teamId)
  
    const managmentList = await TeamApply.find({ teamId : teamId })
      .populate("teamId")
      .populate("applyId")
      .populate("upgradeId")
      .lean();
    console.log("managmentList", managmentList)

    return res.status(200).json({
      teamManagmentSuccess : true,
      message : "성공적으로 팀 지원 목록을 가져왔습니다.",
      managmentList : managmentList
    })
    
  } catch (error) {
    return res.status(400).json({
      teamManagmentSuccess : false,
      message : "팀 지원 목록을 가져오는데 실패했습니다.",
    })
  }

}

const getManagmentDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const foundManagmentDeatil = await TeamApply.findById(id)
      .populate("teamId")
      .populate("applyId")
      .populate("upgradeId")
      .lean();
    console.log("foundManagmentDetail", foundManagmentDeatil)

    if(!foundManagmentDeatil){
      return res.status(404).json({ message: "팀 지원 정보를 찾을 수 없습니다." });
    }

    res.status(200).json({
      foundManagmentDeatil: foundManagmentDeatil,
      file: `http://localhost:8000/${foundManagmentDeatil.portfilo}`, // 파일 URL 반환
    });

  } catch (error) {
    console.error("팀 지원 상세 페이지 오류 :", error);
    res.status(500).json({ message: "서버 에러" });
  }
}

const requestStatusApprove = async (req, res) => {
  try {
    //지원한 유저 아이디
    const { userId, teamId, status, isApplyStatus, applyStatus } = req.body; 
    console.log("req.body", req.body)
    
    if(!userId) {
      return res.status(400).json({ message : "userId가 제공되지 않았습니다."})
    }

    // 지원한 유저
    const user = await TeamApply.findOne({ applyId : userId, teamId : teamId })
      .populate("teamId")
      .populate("applyId")
      .lean();
    console.log("팀 지원한 유저 정보:", user)

    if(!user){
      return res.status(400).json({ message : "유저를 찾을 수 없습니다."})
    }

    await TeamApply.updateOne(
      { _id: user._id },
      {
        isApplyStatus : isApplyStatus,
        applyStatus : applyStatus
      }
    )

    await TeamMatching.updateOne(
      { _id : user.teamId._id },
      {
        $addToSet: { members: user.applyId._id },
        $inc: { currentMemberCount: 1 },
        // $set: { status: status }
      }
    )

    await TeamMembers.create({
      teamId : user.teamId._id,
      userId : user.applyId,
      applyId : user._id
    })

    res.status(200).json({
      message : "팀 지원 멤버를 승인하였습니다.",
      user : user
    })

  } catch (error) {
    console.error("팀 지원 멤버 승인 중 오류가 발생했습니다.", error)
    res.status(500).json({ message : "서버 오류"})
  }
}

const requestStatusReject = async (req, res) => {
  try {
    //지원한 유저 아이디
    const { userId, teamId, status, isApplyStatus, applyStatus } = req.body; 
    console.log("req.body", req.body)
    
    if(!userId) {
      return res.status(400).json({ message : "userId가 제공되지 않았습니다."})
    }

    // 지원한 유저
    const user = await TeamApply.findOne({ applyId : userId, teamId : teamId })
      .populate("teamId")
      .populate("applyId")
      .lean();
    console.log("팀 지원한 유저 정보:", user)

    if(!user){
      return res.status(400).json({ message : "유저를 찾을 수 없습니다."})
    }

    await TeamApply.updateOne(
      { _id: user._id },
      {
        isApplyStatus : isApplyStatus,
        applyStatus : applyStatus
      }
    )

    await TeamMatching.updateOne(
      { _id : user.teamId._id },
      {
        $pull: { members: user.applyId._id },
        $inc: { currentMemberCount: -1 },
      }
    )

    await TeamMembers.deleteOne({
      teamId : user.teamId._id,
      userId : user.applyId,
      applyId : user._id
    })

    res.status(200).json({
      message : "팀 지원 멤버를 거절하였습니다.",
      user : user
    })

  } catch (error) {
    console.error("팀 지원 멤버 거절 중 오류가 발생했습니다.", error)
    res.status(500).json({ message : "서버 오류"})
  }
}

// 마이페이지 팀 지원 상세페이지 파일 다운로드
const applyFileDownload = async (req, res) => {
  const fileName = req.params.fileName;
  console.log('요청된 파일명:', fileName);
  const filePath = path.resolve('uploads', 'showu', 'apply', fileName);
  console.log('파일 경로:', filePath);

  if(!fs.existsSync(filePath)) {
    return res.status(404).send('파일을 찾을 수 없습니다.')
  }

  res.download(filePath, fileName, (err) => {
    if(err) {
      console.log("파일 다운로드 에러: ", err)
      res.status(500).send("파일 다운로드 실패")
    }
  })
}

export { getMyTeamMatching, getTeamMatchingManagment, getManagmentDetail, requestStatusApprove, requestStatusReject, applyFileDownload }




