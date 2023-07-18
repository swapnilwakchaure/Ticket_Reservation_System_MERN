import './App.css';
import React, { useEffect, useRef, useState } from 'react';

function App() {

  const [myData, setMyData] = useState('');
  // const [count, setCount] = useState();

  const count = useRef(0);

  const inputRef = useRef();

  const handleClick = () => {
    const data = inputRef.current.value;
    console.log('data: ',data);
  }

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <div>
      <div>
        <input
          autoFocus
          type="text"
          value={myData}
          onChange={(e) => setMyData(e.target.value)}
          placeholder='write something...'
        />
        <p>The number of times render: {count.current}</p>
      </div>

      <div>
        <input
          ref={inputRef}
          type="text"
          placeholder='Write Something...'
        />
        <br />
        <button onClick={handleClick}>Submit</button>
      </div>
    </div>
  );
}

export default App;
