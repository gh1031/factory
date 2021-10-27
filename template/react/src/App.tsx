import React, { useCallback, useEffect, useMemo, useState, memo } from 'react';
import './index.css';

function App() {
  const [msg, setMsg] = useState('world');
  const [count, setCount] = useState(1);
  useEffect(() => {
    document.title = '';
  }, []);
  const memo = useMemo(() => {
    return [1,2,3]
  }, [count]);
  useMemo(() => {
    return () => {
      console.log('useMemo')
    }
  }, []);
  // will be a new function every render
  // function updateCount() {
  //   setCount(count => count + 1)
  // }
  // will be a memoized function every render
  const updateCount = useCallback(() => {
    setCount(count => count + 1)
  }, []);

  return (
    <div className="app">
      <h1>hello {msg}</h1>
      <h2>count: {count}</h2>
      <div className="box">
        <img className="img" src="https://inews.gtimg.com/newsapp_ls/0/13825160669_294195/0" alt="" />
        <div className="text">text</div>
      </div>
      <Child updateCount={updateCount} />
    </div>
  )
}

// render will be trigger when parent rerender if not use memo
const Child = memo<{ updateCount(): void }>(function Child({ updateCount }): React.ReactElement {
  return (
    <>
      <button onClick={updateCount}>+</button>
      <p>this is react app</p>
    </>
  )
})

export default App;
