import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "passport";

export const connectPassport = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: "asd",
        ClientSecret: "asd",
        callbackURL: "asd",
      },
      async function (accessToken, refreshToken, profile, done) {
        // Data comes here
      }
    )
  );
};

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  done(null, user);
});
