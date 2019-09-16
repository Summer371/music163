import React from 'react';
import {
  BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import appList from "./router";
import './App.css';
import 'antd/dist/antd.css'; // 加载 JS
import 'antd/es/date-picker/style/css'; // 加载 CSS
function App() {
  return (
    <div className="App">
        <Router>
              {
                  appList.map((v,i)=>{
                      return(
                          <Switch key={i}>
                              <Route path={v.path} component={v.component}></Route>
                          </Switch>
                      )
                  })
              }
        </Router>
    </div>
  );
}

export default App;
