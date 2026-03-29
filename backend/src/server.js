import express from "express";
import cors from "cors";
import storyRoutes from "./routes/story.js";
import agentRoutes from "./routes/agents.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/story", storyRoutes);
app.use("/api/agents", agentRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Mechabot API running on port ${PORT}`);
});
