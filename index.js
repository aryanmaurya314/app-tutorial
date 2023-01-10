const express = require("express");
const app = express();

const userRoute = require("./routes/userRoute");


// http://localhost:4000/users
app.use("/users", userRoute);


app.listen(4000, () => {
  console.log("app is started...");
});
