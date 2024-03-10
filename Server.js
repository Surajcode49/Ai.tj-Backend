import app from "./app.js";


app.get("/",(req,res)=>{
  res.send("<h1>hii this is suraj prasad</h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`server is Running bro at PORT: ${process.env.PORT}`);
});
