import express from "express";
import {
  toggleLike,
  checkLikeStatus,
} from "../../controller/reservation/likeController.js";
import passport from "passport";

const likeRouter = express.Router();

likeRouter.post(
  "/performingShows/:id/likes",
  passport.authenticate("jwt", { session: false }),
  toggleLike
);

likeRouter.get(
  "/performingShows/:id/likeStatus",
  passport.authenticate("jwt", { session: false }),
  checkLikeStatus
);

likeRouter.post(
  "/spaces/:id/likes",
  passport.authenticate("jwt", { session: false }),
  toggleLike
);

likeRouter.get(
  "/spaces/:id/likeStatus",
  passport.authenticate("jwt", { session: false }),
  checkLikeStatus
);

export default likeRouter;
