import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import UserPosts from './component/UserPosts.js';
import CountdownTimer from './component/CountdownTimer.js';
import WindowSize from './component/WindowSize.js';
import ValidatedInput from './component/ValidatedInput.js';
import './App.js';

const Index = () => {
  const [userId, setUserId] = useState(1);

  const validateInput = (value) => value.length >= 3;

  return (
    <div className="App">
      <h1>React Hook useEffect Examples</h1>

      {/* UserPosts Component */}
      <UserPosts userId={userId} />
      <button onClick={() => setUserId(userId + 1)}>Next User</button>

      {/* Countdown Timer */}
      <CountdownTimer initialValue={10} />

      {/* Window Size */}
      <WindowSize />

      {/* Validated Input */}
      <ValidatedInput validationFunction={validateInput} errorMessage="Input must be at least 3 characters!" />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);
