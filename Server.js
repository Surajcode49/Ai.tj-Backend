import app from "./app.js";
import { connectDB } from "./config/database.js";

connectDB();



app.get("/", (req, res,next) => {
  res.send("<h1>hii this is suraj prasad</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`server is Running bro at PORT: ${process.env.PORT}`);
});
