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
  "mongodb+srv://nabila:123@cluster0.lycov.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

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
