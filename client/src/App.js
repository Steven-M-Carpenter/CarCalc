import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
//import "./App.css";

import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faPlusCircle, faUser, } from '@fortawesome/free-solid-svg-icons';

import NoMatch from "./pages/NoMatch";
import Login from './pages/Login';
import Logout from './pages/Logout';
import Signup from './pages/Signup';
import LandingPage from './pages/LandingPage';

library.add(faShieldAlt, faPlusCircle, faUser)

class App extends Component {
  state = {
    isLoggedIn: false,
    loginEmail: ""
  }

  handleLoginStatus = (passedStatus, passedEmail) => {
    console.log("APP: Loginstatus and email = " + passedStatus + " " + passedEmail);
    if (passedStatus) {
      this.setState({ isLoggedIn: true, });
      this.setState({ loginEmail: passedEmail });
    } else {
      this.setState({ isLoggedIn: false });
      this.setState({ loginEmail: passedEmail });
    };
    console.log("APP: state = " + JSON.stringify(this.state));
  };


  // reportLogin = () => {
  //   let note = this.state.isLoggedIn;
  //   return note
  // };

  // reportEmail = () => {
  //   let email = this.state.loginEmail;
  //   return email;
  // };


  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/main" render={() => (
              this.state.isLoggedIn ? (
                <Redirect to="/auth/deal" />
              ) : (
                  <Login handleLoginStatus={this.handleLoginStatus} />
              ))} />

            {/* <Route exact path="/auth/deal" component={DealForm} /> */}
            {/* <Route exact path="/auth/save" component={SaveForm} /> */}
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  };
};
export default App;
