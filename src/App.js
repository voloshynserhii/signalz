import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./pages/Main";
import NavBar from './components/Navigation';
import "./index.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <NavBar />
        <Switch>
          <Route path={"/"} exact component={MainPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
