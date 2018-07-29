import React, { Component } from "react";
import {
  Card,
  CardTitle,
  CardSubtitle,
  CardBody,
  CardText,
  CardFooter
} from "reactstrap";

import { connect } from "react-redux";
import { getAllPosts } from "../../actions/post";
import post from "../../reducers/post";

class AllPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allPosts: []
    };
  }
  componentWillMount = async () => {
    await this.props.getAllPosts().then(res => {
      this.setState({
        allPosts: res.payload.data
      });
    });
  };
  render() {
    return this.state.allPosts.map((post, index) => {
      return (
        <div key={index}>
          <h1>All Posts</h1>
          <div className="mt-4">
            <Card>
              <CardBody>
                <CardSubtitle className="text-bold">#DRAFT</CardSubtitle>
                <CardTitle className="text-center">{post.title}</CardTitle>
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
    });
  }
}
function mapStateToProps(state) {
  console.log(state.getAllPosts);
  return {
    getAllPosts: state.getAllPosts.getAllPosts
  };
}
export default connect(
  mapStateToProps,
  { getAllPosts }
)(AllPosts);
