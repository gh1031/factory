import React, { useContext, createContext, useState } from 'react';

const Ctx = createContext(null);
const colors = ['blue', 'green', 'yellow', 'pink']
function Comp1() {
  const { color } = useContext(Ctx);
  return (
    <>
      <div style={{ color }}>Comp1</div>
      <Comp2 />
    </>
  );
}
function Comp2() {
  return (
    <Ctx.Consumer>
      {({ color }) => {
        return <div style={{ color }}>Comp2</div>;
      }}
    </Ctx.Consumer>
  );
}

let count = 0;
function Comp3() {
  const { color, changeColor } = useContext(Ctx);
  function pickColor() {
    const color = colors[count];
    count++;
    if (count > colors.length - 1) {
      count = 0;
    }
    return color;
  }
  return (
    <>
      <div
        style={{ color }}
        onClick={() => changeColor(pickColor())}
      >
        Comp3
      </div>
    </>
  );
}

function App() {
  return (
    <Ctx.Provider value={{ color: "red" }}>
      <Comp1 />
    </Ctx.Provider>
  );
}

function App1() {
  const [color, setColor] = useState('red');
  function changeColor(color) {
    setColor(color)
  }
  return (
    <Ctx.Provider value={{ color, changeColor }}>
      <Comp1 />
      <Comp3 />
    </Ctx.Provider>
  );
}

// export default App;
export default App1;
