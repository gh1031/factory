import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';
import App from './pages/App';
import ReduxHome from './pages/ReduxHome';
import ReduxStore from './redux/ReduxStore';
import HooksHome from './pages/HooksHome';
import HooksStore from './hooks/HooksStore';

export default () => {
  return (
        // <ReduxStore>
        //   <BrowserRouter>
        //   <Route path="/" component={ReduxHome} exact />
        //     <Route path="/login" component={Login} exact />
        //   </BrowserRouter>
        // </ReduxStore>
        // <HooksStore>
          <BrowserRouter>
            {/* <Route path="/" component={HooksHome} exact /> */}
            <Route path="/" component={App} />
            {/* <Route path="/login" component={Login} exact /> */}
          </BrowserRouter>
        // </HooksStore>
  )
}
