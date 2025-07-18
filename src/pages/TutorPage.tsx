import { useState } from 'react';

const sampleResponses: { [key: string]: string } = {
  hello: "Hi there! How can I help you with your WAEC prep today?",
  exam: "The WAEC exam usually tests comprehension, problem-solving, and time management.",
  math: "In Mathematics, make sure to practice algebra, geometry, and word problems.",
  english: "For English, read comprehension passages daily and revise parts of speech.",
  bye: "Goodbye! Keep studying and don’t give up!",
};

function TutorPage() {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'You', text: input };
    const lowercaseInput = input.toLowerCase();
    const responseText = Object.keys(sampleResponses).find(keyword =>
      lowercaseInput.includes(keyword)
    );

    const aiMessage = {
      sender: 'AI Tutor',
      text: responseText ? sampleResponses[responseText] : "Sorry, I don't understand that yet. Try asking about WAEC, math, or English.",
    };

    setMessages([...messages, userMessage, aiMessage]);
    setInput('');
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>🎓 Simulated AI Tutor</h2>
      <div
        style={{
          border: '1px solid #ccc',
          padding: '1rem',
          height: '300px',
          overflowY: 'scroll',
          marginBottom: '1rem',
          backgroundColor: '#f9f9f9',
        }}
      >
        {messages.map((msg, index) => (
          <p key={index}><strong>{msg.sender}:</strong> {msg.text}</p>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Ask me anything..."
        style={{ padding: '0.5rem', width: '80%' }}
      />
      <button onClick={handleSend} style={{ padding: '0.5rem', marginLeft: '0.5rem' }}>
        Send
      </button>
    </div>
  );
}

export default TutorPage;