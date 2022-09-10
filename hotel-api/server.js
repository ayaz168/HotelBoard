const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const hotelsRoute = require("./routes/hotels");
const roomsRoute = require("./routes/rooms");
//cokie parser as middleware
const CookieParser = require("cookie-parser");

const app = express();
app.use(express.json());

app.use(cors()); //Stops cross-origin errors

dotenv.config();

const connect = async () => {
  await mongoose
    .connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB Cluster"))
    .catch(console.error);
};
//Listners

mongoose.connection.on("diconnected", () => {
  console.log("MongoDB Disconnected");
});
mongoose.connection.on("connected", () => {
  console.log("MongoDB Connected");
});

//Middlewares ==> Defining Routes

app.use(CookieParser());

app.use(express.json()); //To be abe to send json data

app.use("/auth", authRoute);
app.use("/users", usersRoute);
app.use("/hotels", hotelsRoute);
app.use("/rooms", roomsRoute);

app.use((err, req, res) => {
  const errCode = err.status || 500;
  const errMsg = err.message || "Default Error";

  return res.status(errCode).json({
    success: false,
    status: errCode,
    message: errMsg,
  });
});

app.listen(8780, () => {
  connect();
  console.log("Server Connected.");
});
