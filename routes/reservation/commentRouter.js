import express from "express";
import {
  addComment,
  editComment,
  deleteComment,
} from "../../controller/reservation/commentController.js";
import passport from "passport";

const commentRouter = express.Router();

commentRouter.post(
  "/performingShows/:id/comments",
  passport.authenticate("jwt", { session: false }),
  addComment
);
commentRouter.put(
  "/performingShows/:id/comments/:commentId",
  passport.authenticate("jwt", { session: false }),
  editComment
);
commentRouter.delete(
  "/performingShows/:id/comments/:commentId",
  passport.authenticate("jwt", { session: false }),
  deleteComment
);

export default commentRouter;
