import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

const app = express();

app.use(express.json());

app.use("/posts", postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const Connection =
  "mongob://127.0.0.1:27017/memories?gssapiServiceName=mongodb";

makeConnection();
async function makeConnection() {
  await mongoose.connect(
    Connection,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("database connected");
      app.listen(3001, console.log("Server Started!"));
    }
  );
}
mongoose.set("useFindAndModify", false);
