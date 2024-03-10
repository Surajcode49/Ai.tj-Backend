import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "passport";

export const connectPassport = () => {
  passport.use(
    new GoogleStrategy({
      clientID: "asd",
      ClientSecret: "asd",
      callbackURL: "asd",
    })
  );
};
