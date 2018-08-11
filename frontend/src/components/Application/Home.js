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
  CardText,
  CardImg,
  CardFooter
} from "reactstrap";
import Header from "./Header";
import FeaturedPost from "./FeaturedPost";
import OldPost from "./OldPost";

class Home extends Component {
  componentDidMount = () => {
    fetch("http://localhost:3000/nomadopedia")
      .then(data => data.json())
      .then(data => {
        console.log(data);
      });
  };
  render() {
    return (
      <div>
        <Container>
          <ImageSlider className="mb-4" />
          <Row>
            <Col sm="8">
              <FeaturedPost className="mt-4" />
            </Col>
            <Col sm="4">
              <OldPost />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Home;
