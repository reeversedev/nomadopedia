import React, { Component } from "react";
import { Card, CardImg, CardTitle, CardBody, CardText } from "reactstrap";

export default class OldPost extends Component {
  render() {
    return (
      <div>
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
              My name is Sorabh, Etiam volutpat leo nec libero feugiat, vel
              malesuada neque commodo. Curabitur sem nibh, auctor a viverra ut,
              dictum ullamcorper libero.
            </CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}
