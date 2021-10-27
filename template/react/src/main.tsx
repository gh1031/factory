import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

ReactDom.render(
  <App />,
  document.querySelector('#root')
);

(window as any).FiberRoot = (document.getElementById('root') as any)._reactRootContainer._internalRoot;
(window as any).RootFiber = (document.getElementById('root') as any)._reactRootContainer._internalRoot.current;
