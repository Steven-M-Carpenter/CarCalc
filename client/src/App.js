import ReactGA from 'react-ga';
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import NoMatch from "./pages/NoMatch";
import LandingPage from './pages/LandingPage';
import DealForm from './pages/DealForm';


library.add(faCar)

// function initializeReactGA() {
  ReactGA.initialize('UA-139996715-1');
  ReactGA.pageview(window.location.pathname + window.location.search)
  // ReactGA.pageview('/');
// }

class App extends Component {
  state = {}

  handleLoginStatus = (passedStatus, passedEmail) => {
//    console.log("APP: Loginstatus and email = " + passedStatus + " " + passedEmail);
    if (passedStatus) {
      this.setState({ isLoggedIn: true, });
      this.setState({ loginEmail: passedEmail });
    } else {
      this.setState({ isLoggedIn: false });
      this.setState({ loginEmail: passedEmail });
    };
//    console.log("APP: state = " + JSON.stringify(this.state));
  };


  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={LandingPage} />
            <Route exact path="/auth" render={() => (
              this.state.isLoggedIn ? (
                <Redirect to="/auth/deal" />
              ) : (
                <LandingPage handleLoginStatus={this.handleLoginStatus} />
              ))} />
            <Route exact path="/auth/deal" component={DealForm} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  };
};
export default App;