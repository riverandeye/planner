import React from "react";

import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import Layout from "./component/layout";

function App() {
  return (
    <Router>
      <Layout toggleModal={() => {}} />
    </Router>
  );
}

export default App;
