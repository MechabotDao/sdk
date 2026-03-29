import { runDebate } from "./debateSystem.js";

export async function generateChapter() {
  const debate = await runDebate();

  return {
    title: "Chapter " + Math.floor(Math.random() * 1000),
    content: `Agents debated: ${debate.summary}`,
    timestamp: new Date()
  };
}
