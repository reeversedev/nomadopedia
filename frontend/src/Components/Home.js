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
                  <CardBody>
                    <CardText>
                      Bearing cattle void spirit third whose fill let shall our
                      also signs. Fly subdue of herb won’t. Lights one Man whose
                      green two. Hath, void created.
                    </CardText>
                    <CardText>
                      In over under beast seed He. Thing Second stars green
                      there gathering living. Without greater image moving
                      living signs fruit above heaven. Hath, behold isn’t Day.
                    </CardText>
                    <CardText>
                      Isn’t saw fill green open brought grass lights darkness
                      doesn’t seas, stars tree void fowl god Replenish had
                      third, make lights likeness years above night, creeping is
                      divide let first may after. Very give you’re evening may
                      good years whose fowl Together whales night air, spirit
                      which. Whose creepeth can’t dry second and whales. Their
                      herb winged.
                    </CardText>
                    <CardText>
                      Kind fowl beginning, every man saying, so fish without
                      replenish made won’t good, face i. Beginning. Which good
                      Moving in without given won’t hath fish said, sea beast
                      herb a waters to form creepeth our man open shall subdue.
                      Him whose.
                    </CardText>
                    <CardText>
                      Life so moving unto lesser fourth very seed and without
                      may whose Replenish were seas life heaven place were.
                      Seasons earth of great creepeth Unto. Make to herb.
                      Behold.
                    </CardText>
                  </CardBody>
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
