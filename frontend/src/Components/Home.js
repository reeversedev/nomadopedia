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
  CardSubtitle,
  CardText
} from "reactstrap";

class Home extends Component {
  render() {
    return (
      <div>
        {/* <ImageSlider /> */}
        <Container>
          <Row>
            <Col sm="8">
              <div>
                <Card>
                  <CardBody>
                    <CardText className="text-center">March 10, 2018</CardText>
                    <CardTitle className="text-center">
                      Awesome Standard Post
                    </CardTitle>
                    <p className="text-center ">
                      <CardLink className="text-uppercase text-warning">
                        Lifestyle/ widget
                      </CardLink>
                    </p>
                  </CardBody>
                  <img
                    src="https://themes.wplook.com/morning-time/wp-content/uploads/sites/16/2018/03/caleb-george-144977-unsplash-1280x800.jpg"
                    width="100%"
                  />
                </Card>
              </div>
            </Col>
            <Col sm="4">
              <Card>
                <CardTitle className="text-center">Hi, I am Sorabh</CardTitle>
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
