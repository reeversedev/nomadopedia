import React, { Component } from "react";

import { Row, Col } from "reactstrap";

import Routes from "../../config/routes";
import AllPosts from "./AllPosts";

import { Link } from "react-router-dom";

export default class AdminHome extends Component {
  render() {
    return (
      <div>
        <Row className="mt-4">
          <Col sm="8">
            <AllPosts />
          </Col>
          <Col sm="4">
            <div className="d-flex justify-content-end align-items-end">
              <Link
                to={Routes.createpost}
                className="btn btn-primary pull-right"
              >
                + Create Post
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
