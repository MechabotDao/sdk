import { useEffect, useState } from "react";

export default function Home() {
  const [story, setStory] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/story")
      .then(res => res.json())
      .then(data => setStory(data.chapter));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>🤖 Mechabot Story Engine</h1>

      {story && (
        <div>
          <h2>{story.title}</h2>
          <p>{story.content}</p>
        </div>
      )}
    </div>
  );
}
