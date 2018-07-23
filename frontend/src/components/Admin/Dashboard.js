import React, { Component } from "react";
import AdminHeader from "./AdminHeader";
import { Container, Col, Row } from "reactstrap";
import AllPosts from "./AllPosts";

import { Link } from "react-router-dom";

import Routes from '../../config/routes';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <AdminHeader />
        <Container>
          <Row className="mt-4">
            <Col sm="8">
              <AllPosts />
            </Col>
            <Col sm="4">
              <div className="d-flex justify-content-end align-items-end">
                <Link to={Routes.createpost} className="btn btn-primary pull-right">
                  + Create Post
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
