export default function AgentCard({ name }: { name: string }) {
  return (
    <div style={{
      border: "1px solid #333",
      padding: 10,
      margin: 10
    }}>
      <h3>{name}</h3>
      <p>AI Agent participating in story</p>
    </div>
  );
}
