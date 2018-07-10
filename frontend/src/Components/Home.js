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
  CardText,
  CardImg,
  CardFooter
} from "reactstrap";

class Home extends Component {
  render() {
    return (
      <div>
        <ImageSlider />
        <Container>
          <Row className="mt-4">
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
                  <CardFooter className="gray-background">
                    <Row>
                      <Col sm="4">
                        <div className="about-image">
                          <img src="https://scontent.ffjr1-4.fna.fbcdn.net/v/t1.0-9/31490594_10216669808566432_3735181059290174503_n.jpg?_nc_fx=ffjr1-1&_nc_cat=0&oh=69a9146ff5da92101ca90a2b5ca225a0&oe=5BE335E6" />
                        </div>
                      </Col>
                      <Col>
                      <div className="about-author">
                        <CardTitle><b>Sorabh</b></CardTitle>
                        <p className="summary">
                          Share a little biographical information to fill out
                          your profile. This may be shown publicly.<a> View all
                          posts by Victor</a>
                        </p>
                        </div>
                      </Col>
                    </Row>
                  </CardFooter>
                </Card>
              </div>
            </Col>
            <Col sm="4">
              <Card>
                <div className="about-image">
                  <CardImg
                    src="https://scontent.ffjr1-4.fna.fbcdn.net/v/t1.0-9/31490594_10216669808566432_3735181059290174503_n.jpg?_nc_fx=ffjr1-1&_nc_cat=0&oh=69a9146ff5da92101ca90a2b5ca225a0&oe=5BE335E6"
                    top
                    width="50"
                    height="50"
                  />
                </div>
                <CardTitle className="text-center author-title">
                  Hi, I am Sorabh!
                </CardTitle>
                <CardBody>
                  <CardText className="description">
                    My name is Sorabh, Etiam volutpat leo nec libero feugiat,
                    vel malesuada neque commodo. Curabitur sem nibh, auctor a
                    viverra ut, dictum ullamcorper libero.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Home;
