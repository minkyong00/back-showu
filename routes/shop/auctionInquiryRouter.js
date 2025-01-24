import express from 'express';
import passport from 'passport'
import { createInquiry, getInquiryList, getInquiryDetail, updateInquiry, deleteInquiry } from '../../controller/shop/auctionInquiryController.js';

const auctionInquiryRouter = express.Router();
// const authenticateJWT = passport.authenticate('jwt', { session: false });

auctionInquiryRouter.post('/', createInquiry) // 문의 내역 작성
auctionInquiryRouter.get('/list', getInquiryList) // 문의 목록
auctionInquiryRouter.get('/:id', getInquiryDetail) // 문의 상세 내역
auctionInquiryRouter.put('/:id', updateInquiry) // 문의 내역 수정
auctionInquiryRouter.delete('/:id', deleteInquiry) // 문의 내역 삭제

// inquiryRouter.post('/', authenticateJWT, createInquiry)
// inquiryRouter.get("/list", getAllInquiries) // shop/md/inquiry/list


export default auctionInquiryRouter;