import React, { Component } from "react";
import AdminHeader from "./AdminHeader";
import { Container, Col, Row } from "reactstrap";

import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import Routes from "../../config/routes";
import CreatePost from "./CreatePost";
import AdminHome from "./AdminHome";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <AdminHeader />
        <Container>
          <Router>
            <Switch>
              <Route exact path={Routes.admin} component={AdminHome} />
              <Route exact path={Routes.createpost} component={CreatePost} />
            </Switch>
          </Router>
        </Container>
      </div>
    );
  }
}
export default Dashboard;
