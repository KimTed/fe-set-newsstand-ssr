import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import Header from "./pages/Headers/index.js";
import MyNewsProvider from "./pages/MyNewsProvider.js";
import NoMatch from "./Nomatch.js";
import routes from "./routes.js";

const App = props => {
  return (
    <MyNewsProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          {routes.map(({ path, component: Component, exact }) => (
            <Route
              key={path}
              exact={exact}
              path={path}
              render={props => <Component {...props} />}
            />
          ))}
          <Route component={NoMatch} /> }
        </Switch>
      </BrowserRouter>
    </MyNewsProvider>
  );
};

export default App;
