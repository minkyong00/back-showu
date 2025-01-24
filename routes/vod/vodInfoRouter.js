import express from 'express'
import passport from 'passport';
import {getlikestatus,getVodId, getVodLikes} from '../../controller/vod/vodInfoController.js';
import { getShowuVodId, uploadName } from '../../controller/vod/vodShowuVideoController.js';

const vodInfoRouter=express.Router();


vodInfoRouter.get('/:id', getVodId);
vodInfoRouter.post('/:id/likes', passport.authenticate('jwt', { session: false }), getVodLikes);
vodInfoRouter.get('/:id/like/status',passport.authenticate('jwt', { session: false }), getlikestatus);
vodInfoRouter.get('/:id/showu',getShowuVodId)
vodInfoRouter.get('/:id/name',uploadName)

export default vodInfoRouter