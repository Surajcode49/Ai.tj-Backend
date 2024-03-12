import express from "express";
import dotenv from "dotenv";
import { connectPassport } from "./utils/provider.js";
import session from "express-session";
import passport from "passport"; // Moved import here

const app = express();
export default app;

dotenv.config({
  path: "./config/config.env",
});

// Using Middlewares

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session()); // Moved initialization before usage

connectPassport(); // Make sure this function initializes Passport properly

// importing Routes
import userRoute from "./routes/user.js";

app.use("/api/v1", userRoute);
// Error Handling middleware
