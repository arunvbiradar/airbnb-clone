import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", {
    pageTitle: "Dashboard",
    breadCrumb: "Dashboard",
  });
});

router.get("/create-room", (req, res) => {
  res.render("./pages/createRoom", {
    pageTitle: "Create Room",
    breadCrumb: "Create Room",
  });
});

export default router;
