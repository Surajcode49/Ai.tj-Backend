import express from "express";
import passport from "passport";
import { myprofile } from "../controllers/user.js";

const router = express.Router();

router.get(
  "/googlelogin",
  passport.authenticate("google", { scope: ["profile"] })
);

router.get("/login", passport.authenticate("google"),
(req,res ,next)=>{
  res.send("you are logged in in Ai.Sikho")
})

// route for logging out users. will



router.get("/me", myprofile);

export default router;
