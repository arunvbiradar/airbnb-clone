import express from "express";
import "dotenv/config";
import { db } from "./db/db.js";
import rooms from "./routes/rooms.js";
import bodyParser from "body-parser";
import { renderFile } from "ejs";
import path from "path";

// App config
const app = express();
const __dirname = path.resolve();

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// DB Config

// example
const data = {
  firstName: "Tim",
  lastName: "Cook",
};

// API endpoint
app.use("/api/v1/rooms", rooms);
app.get("/dashboard", (req, res) => {
  res.render("index", { data: "this is a sample data from nodejs" });
});

// Listener
const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await db(process.env.DB_URL);
    app.listen(port, () => console.log(`Server started on PORT ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
