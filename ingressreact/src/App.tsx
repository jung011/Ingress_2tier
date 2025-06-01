import React, { useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [input, setInput] = useState('결과');
  const [response, setResponse] = useState('');

  const handleSubmit = async () => {
    try {
      console.log('전송할 데이터:', input);
      const result = await axios.post('http://localhost/api/data', {
        data: input
      });
      console.log('서버 응답:', result.data);
      setResponse(result.data);
    } catch (error) {
      console.error('에러 발생:', error);
      setResponse('에러가 발생했습니다.');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input 
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="입력해주세요"
        />
        <button onClick={handleSubmit}>전송</button>
        <div>입력값: {input}</div>
        <div>서버 응답: {response}</div>
      </header>
    </div>
  );
}

export default App;
