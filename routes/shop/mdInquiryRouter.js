import express from 'express';
import passport from 'passport'
import { createInquiry, getInquiryList, getInquiryDetail, updateInquiry, deleteInquiry } from '../../controller/shop/mdInquiryController.js';

const mdInquiryRouter = express.Router();
// const authenticateJWT = passport.authenticate('jwt', { session: false });

mdInquiryRouter.post('/', createInquiry) // 문의 내역 작성
mdInquiryRouter.get('/list', getInquiryList) // 문의 목록
mdInquiryRouter.get('/:id', getInquiryDetail) // 문의 상세 내역
mdInquiryRouter.put('/:id', updateInquiry) // 문의 내역 수정
mdInquiryRouter.delete('/:id', deleteInquiry) // 문의 내역 삭제

// inquiryRouter.post('/', authenticateJWT, createInquiry)
// inquiryRouter.get("/list", getAllInquiries) // shop/md/inquiry/list


export default mdInquiryRouter;