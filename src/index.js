import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Provider } from "mobx-react";
import registerServiceWorker from "./utils/registerServiceWorker";
import models from "./models";

// UI
import CssBaseline from "material-ui/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import blue from "material-ui/colors/blue";
import grey from "material-ui/colors/grey";

// CSS
import "chartist/dist/chartist.css";
import "jvectormap/jquery-jvectormap.css";

// Modules
import Home from "./containers/Home";

// Styles
const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: blue["A700"]
    },
    secondary: grey
  }
});

const history = createBrowserHistory();

ReactDOM.render(
  <Provider {...models}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router history={history}>
        <Switch>
          <Route path="/" name="Home" component={Home} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
