import express from 'express';
import passport from 'passport';
import { getTickets, getTicketsDetail, getSpaces } from '../../controller/mypage/myReservationController.js';

const myReservationRouter = express.Router()

// 티켓 예매 내역 '/my/reservation/ticket'
myReservationRouter.get("/ticket", passport.authenticate('jwt', { session: false }), getTickets)

// 티켓 예매 상세 내역 '/my/reservation/ticket/:id'
myReservationRouter.get("/ticket/:id", passport.authenticate('jwt', { session: false }), getTicketsDetail)

// 공간 대여 내역 '/my/reservation/space'
myReservationRouter.get("/space", passport.authenticate('jwt', { session: false }), getSpaces)


export default myReservationRouter