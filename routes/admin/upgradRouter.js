import express from 'express';
import passport from 'passport';
import { UpgradeAllData, getUgradeDetail, downloadFile, requestStatusExport, requestStatusReject } from '../../controller/admin/upgradeController.js';

const upgradRouter = express.Router();

//등급업 신청 내역 불러오기
upgradRouter.get("/all-data", passport.authenticate('jwt', { session: false }), UpgradeAllData)

// 등급업 신청 상세 페이지
upgradRouter.get("/:id", getUgradeDetail)

// 등급업 포트폴리오 다운로드
upgradRouter.get("/download-file/:fileName", downloadFile)

// 등급업 승인
upgradRouter.put("/request-status/export", requestStatusExport)

// 등급업 거절
upgradRouter.put("/request-status/reject", requestStatusReject)

export default upgradRouter