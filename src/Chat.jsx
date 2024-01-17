import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
const Chat = () => {
  const [inputText, setInputText] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const sendMessage = async () => {
    if (inputText.trim() === '') return;

    // Add user message to chat history
    setChatHistory([...chatHistory, { role: 'user', text: inputText }]);

    // Make request to GPT-3 API
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/davinci-codex/completions',
        {
          prompt: inputText,
          max_tokens: 100,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'API_KEY',
          },
        }
      );

      // Add GPT-3 response to chat history
      setChatHistory([
        ...chatHistory,
        { role: 'bot', text: response.data.choices[0].text.trim() },
      ]);
    } catch (error) {
      console.error('Error calling  API:', error);
    }

    // Clear the input field
    setInputText('');
  };

  return (
    <div className='main'>
     <div className="chat-container">
      <div className="chat-history">
        {chatHistory.map((message, index) => (
          <div key={index} className={`message ${message.role}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={inputText}
          placeholder='Ask your query?'
          onChange={(e) => setInputText(e.target.value)}
        />
        <button className='bg-primary' onClick={sendMessage}>Ask</button>
      </div>
    </div>
    </div>
  );
};

export default Chat;
