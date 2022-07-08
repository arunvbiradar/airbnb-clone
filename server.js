import express from "express";
import "dotenv/config";
import { db } from "./db/db.js";
import { apis, view } from "./routes/index.js";
import bodyParser from "body-parser";

// App config
const app = express();

// Middleware
app.use(express.static('./views/assets'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// DB Config

// API endpoint
app.use("/api/v1/", apis);
app.use("/dashboard", view);

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
