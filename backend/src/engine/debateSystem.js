export async function runDebate() {
  const agents = ["Narrator", "Rebel", "Strategist"];

  const outcome = agents.map(a => `${a} argues`).join(", ");

  return {
    summary: outcome,
    winner: agents[Math.floor(Math.random() * agents.length)]
  };
}
