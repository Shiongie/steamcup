import React from 'react';

import UserReportList from './component/UserReportList';
import UserReportModal from './component/UserReportModal';
/* import Login from './Login';
import RegisterAs from './RegisterAs';
import Register from './Register';
import RegisterLTO from './RegisterLTO';
import Main from './Main'; */

import {Provider} from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
      <Provider store = {store}>
    <div className="App">
      <div className = "row">
        <div className="col-4"></div>
        <div className = "col-4 column"><UserReportModal/></div>
        <div className="col-4"></div>
      </div>
      <div className = "row">
        <div className="col-4"></div>
        <div className = "col-4 column"><UserReportList/></div>
        <div className="col-4"></div>
      </div>
    </div>
    </Provider>
  );
}

export default App;
