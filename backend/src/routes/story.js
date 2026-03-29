import express from "express";
import { generateChapter } from "../engine/storyEngine.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const chapter = await generateChapter();
  res.json({ chapter });
});

export default router;
