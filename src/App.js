import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./pages/Main";
import DemoPage from "./pages/Demo";

import NavBar from "./components/Navigation";
import "./index.scss";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        
          <Route path={"/"} exact>
          <NavBar/>

            <MainPage/>
          </Route>
        <Route  path={"/demo"} exact>
          <div className="fullScreen">
          <NavBar/>

          <DemoPage className=""/>
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
