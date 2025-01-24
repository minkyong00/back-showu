import TeamMatching from "../../models/showu/teamMatchingSchema.js";
import User from "../../models/users/userSchema.js";
import path from 'path';
import fs from 'fs';

const getTeamList = async (req, res) => {
    try {
        const foundTeam = await TeamMatching.find({}).populate("file").lean();
        const foundUserName = await User.find({}).lean();

        console.log("foundTeam", foundTeam);
        console.log("foundUserName", foundUserName);

        // team에 유저 정보 추가
        const enrichedTeams = foundTeam.map(team => {
        const userName = foundUserName.find(user => user._id.toString() === team.teamLeader.toString());
        // 사용자 정보를 lesson에 추가
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
        console.error("getMainLesson error:", error);

        res.status(500).json({
        mainLessonSuccess: false,
        message: "lesson을 가져오는데 실패했습니다",
        });
    }
}

const getTeamDetail = async (req, res) => {
    const { id } = req.params;
    console.log("id", id)

    try {
        const teamList = await TeamMatching.find({ _id : id })
            .populate("teamLeader")
            // .populate("")
            .lean();

        console.log("teamList : ", teamList)

        res.status(200).json({
            teamDetailSuccess : true,
            message : "팀매칭 상세 페이지를 성공적으로 가져왔습니다.",
            teamList : teamList,
        })

    } catch (error) {
        res.status(400).json({
            teamDetailSuccess : false,
            message : "팀매칭 상세 페이지를 가져오는데 실패했습니다",
        })
    }
}

const teamCreate = async (req, res) => {
    const userId = req.user._id;
    // console.log("userId", userId)
    const userRole = req.user.role;
    console.log("userRole", userRole);

    // role이 export가 아닌 경우 요청 차단
    if (userRole !== "export") {
        return res.status(403).json({
        teamCreateSuccess: false,
        message: "팀 개설 권한이 없습니다. 등급이 'export'여야 합니다.",
        });
    }

    const { teamName, category, teamTitle, teamIntro, activityPeriodStart, deadLine, careerHistory, recruit, area } = req.body;

    const foundUser = await TeamMatching.findOne({ teamLeader : userId }).lean();
    console.log("foudnUser", foundUser)

    const uploadFolder = "uploads/showu/create";
    const filePaths = {}; // 파일 경로 저장

    if (req.files) {
    if (req.files.file) {
        const portfolioPath = path.join(uploadFolder, req.files.file[0].filename).replaceAll("\\", "/");
        filePaths.file = `/${portfolioPath}`;
    }

    if (req.files.teamProfile) {
        const profilePath = path.join(uploadFolder, req.files.teamProfile[0].filename).replaceAll("\\", "/");
        filePaths.teamProfile = `/${profilePath}`;
    }
    }

    const createTeam = await TeamMatching.create({
        teamLeader : userId,
        teamName : teamName,
        category : category,
        teamTitle : teamTitle,
        teamIntro : teamIntro,
        file : filePaths.file || null,
        teamProfile : filePaths.teamProfile || null,
        activityPeriodStart : activityPeriodStart,
        deadLine : deadLine,
        careerHistory : careerHistory,
        recruit : recruit,
        area : area
    })

    console.log("createTeam", createTeam)

    res.status(200).json({
        teamCreateSuccess : true,
        message : "팀 개설이 완료되었습니다.",
        createTeamList : createTeam,
        filePath : filePaths.file,
        profileFilePath : filePaths.teamProfile
    })
    // res.status(400).json({
    //     teamCreateSuccess : false,
    //     message : "팀 개설를 하는 도중 오류가 발생했습니다.",
    // })
}

// 팀 공고 상세 페이지 포트폴리오 다운로드
const teamPortfiloDownLoad = async (req, res) => {
    const fileName = req.params.fileName;
    console.log("요청된 파일명 : ", fileName)
    const filePath = path.resolve('uploads', 'showu', 'create', fileName);
    console.log("파일 경로", filePath)

    if(!fs.existsSync(filePath)){
        return res.status(404).send("파일을 찾을 수 없습니다.")
    }

    res.download(filePath, fileName, (err) => {
        if(err){
            console.log("파일 다운로드 에러: ", err)
            res.status(500).send("파일 다운로드 실패")
        }
    })
}

// 팀 매칭 좋아요 추가
const addTeamLike = async (req, res) => {
    const userId = req.user._id;
    const { teamId } = req.params;

    console.log("userId:", userId);
    console.log("teamId:", teamId);

    try {
        const foundUser = await User.findOne({ _id: userId });
        if (!foundUser) {
            return res.status(404).json({ message: "유저를 찾을 수 없습니다." });
        }

        const foundTeam = await TeamMatching.findOne({ _id: teamId });
        if (!foundTeam) {
            return res.status(404).json({ message: "팀을 찾을 수 없습니다." });
        }

        // 유저가 이미 좋아요를 눌렀는지 확인
        const isAlreadyLiked = foundTeam.likedUsers.includes(userId);

        if (isAlreadyLiked) {
            // 좋아요 취소
            foundTeam.likedUsers = foundTeam.likedUsers.filter(
                (id) => id.toString() !== userId.toString()
            );
            foundTeam.likeCount -= 1;
            await foundTeam.save();

            return res.status(200).json({
                addlikeSuccess: true,
                message: "좋아요가 취소되었습니다.",
                likeCount: foundTeam.likeCount,
                liked: false,
            });
        }

        // 좋아요 추가
        foundTeam.likedUsers.push(userId);
        foundTeam.likeCount += 1;
        await foundTeam.save();

        return res.status(200).json({
            addlikeSuccess: true,
            message: "좋아요가 추가되었습니다.",
            likeCount: foundTeam.likeCount,
            liked: true,
        });
    } catch (error) {
        console.error("좋아요 처리 중 오류 발생:", error);
        res.status(500).json({
            addlikeSuccess: false,
            message: "서버 오류로 인해 좋아요를 처리하지 못했습니다.",
        });
    }
};

// 좋아요 여부 확인
const getTeamLike = async (req, res) => {
    const { teamId } = req.params;
    const userId = req.user._id;

    try {
        const team = await TeamMatching.findById(teamId);
        if (!team) {
            return res.status(404).json({ message: "팀을 찾을 수 없습니다." });
        }

        const liked = team.likedUsers.includes(userId);

        res.status(200).json({
            getLikeSuccess: true,
            message: liked
                ? "로그인한 유저가 이 팀을 찜했습니다."
                : "로그인한 유저는 이 팀을 찜하지 않았습니다.",
            liked: liked,
        });
    } catch (error) {
        console.error("좋아요 여부 확인 중 오류 발생:", error);
        res.status(500).json({ message: "서버 오류로 인해 좋아요 여부를 확인하지 못했습니다." });
    }
};

const teamModify = async (req, res) => {
    const userId = req.user._id;
    console.log("userId", userId)
    const { id } = req.params;
    console.log("id", id)

    const { teamName, category, teamTitle, teamIntro, area, activityPeriodStart, deadLine, careerHistory, recruit } = req.body;
    
    const foundUser = await TeamMatching.findOne({ teamLeader : userId, _id : id }).lean();
    console.log("foundUser", foundUser)

    const uploadFolder = "uploads/showu/create";
    const filePaths = {}; // 파일 경로 저장

    if (req.files) {
    if (req.files.file) {
        const portfolioPath = path.join(uploadFolder, req.files.file[0].filename).replaceAll("\\", "/");
        filePaths.file = `/${portfolioPath}`;
    }

    if (req.files.teamProfile) {
        const profilePath = path.join(uploadFolder, req.files.teamProfile[0].filename).replaceAll("\\", "/");
        filePaths.teamProfile = `/${profilePath}`;
    }
    }

    const modifyTeam = await TeamMatching.updateOne(
        { teamLeader : userId, _id : id },
        {
            teamLeader : userId,
            teamName : teamName,
            category : category,
            teamTitle : teamTitle,
            teamIntro : teamIntro,
            file : filePaths.file || foundUser.file,
            teamProfile : filePaths.teamProfile || foundUser.teamProfile,
            activityPeriodStart : activityPeriodStart,
            deadLine : deadLine,
            careerHistory : careerHistory,
            recruit : recruit,
            area : area
        }
    )

    console.log("modifyTeam", modifyTeam)

    res.status(200).json({
        modifyTeamSuccess : true,
        message : "팀 수정이 완료되었습니다.",
        modifyTeam : modifyTeam
    })
    
}

const getTeamDatas = async (req, res) => {
    const userId = req.user._id
    const { id } = req.params;

    try {
        const team = await TeamMatching.findOne({ teamLeader : userId, _id : id }).lean();

        if(!team){
            return res.status(400).json({ message : "팀을 찾을 수 없습니다."})
        }

        const teamDatas = {
            teamName : team.teamName,
            category : team.category,
            teamTitle : team.teamTitle,
            teamIntro : team.teamIntro,
            file : team.file,
            teamProfile : team.teamProfile,
            activityPeriodStart : team.activityPeriodStart,
            deadLine : team.deadLine,
            careerHistory : team.careerHistory,
            recruit : team.recruit,
            area : team.area
        }

        return res.status(200).json(teamDatas)
    } catch (error) {
        console.error("팀 매칭 정보 조회 중 오류 발생", error);
        return res.status(500).json({ message: "서버 오류가 발생했습니다." });
    }
}


export { getTeamList, getTeamDetail, teamCreate, teamPortfiloDownLoad, addTeamLike, getTeamLike, teamModify, getTeamDatas }