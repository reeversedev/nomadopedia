import React, { Component } from "react";
import {
  Card,
  CardTitle,
  CardSubtitle,
  CardBody,
  CardText,
  CardFooter
} from "reactstrap";

export default class AllPosts extends Component {
  render() {
    return (
      <div>
        <h1>All Posts</h1>
        <div className="mt-4">
          <Card>
            <CardBody>
              <CardSubtitle className="text-bold">#DRAFT</CardSubtitle>
              <CardTitle className="text-center">
                Awesome Standard Post
              </CardTitle>
              <CardSubtitle className="text-center">Subtitle</CardSubtitle>
            </CardBody>
            <img
              width="100%"
              src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
              alt="Card image cap"
            />
            <CardBody>
              <CardText>This is first paragraph.</CardText>
              <CardText>This is second paragraph.</CardText>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}
