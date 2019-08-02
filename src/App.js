import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/layouts/Layout";

import Home from "./pages/Home";
import Auth from "./pages/Auth";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/#/auth' exact component={Auth} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
