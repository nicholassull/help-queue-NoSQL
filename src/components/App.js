import React from "react";
import Header from "./Header";
import Signin from "./Signin";
import TicketControl from "./TicketControl";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(){
  return (
    <Router>
      <Header />
      {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/">
        <TicketControl />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;