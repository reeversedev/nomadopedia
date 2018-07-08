import React, { Component } from "react";
import ImageSlider from "./ImageSlider";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle
} from "reactstrap";

class Home extends Component {
  render() {
    return (
      <div>
        <ImageSlider />
        <Container>
          <Row>
            <Col sm="8">
              <div>
                <Card>
                  <CardTitle className="text-center">Card Title</CardTitle>
                  <CardSubtitle />
                </Card>
              </div>
            </Col>
            <Col sm="4">
              <Card>
                <CardTitle className="text-center">Card Title</CardTitle>
                <CardSubtitle />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Home;
