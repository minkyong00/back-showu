import express from 'express';
import passport from 'passport';
import { downloadTeamFile, getTeamById, requestStatusComplete, requestStatusReject, teamAllData } from '../../controller/admin/teamController.js';

const teamRouter = express.Router();

// 팀 매칭 개설 내역 조회 'admin/team/all-data'
teamRouter.get("/all-data", passport.authenticate('jwt', { session: false }), teamAllData)

// 팀 매칭 개설 상세 페이지 'admin/team/:id'
teamRouter.get("/:id", getTeamById)

// 팀 포트폴리오 다운 'admin/team/download-file/:fileName'
teamRouter.get("/download-file/:fileName", downloadTeamFile)

// 팀 매칭 승인
teamRouter.put("/request-status/complete", requestStatusComplete)

// 팀 매칭 거절
teamRouter.put("/request-status/reject", requestStatusReject)

export default teamRouter;