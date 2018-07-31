import React, { Component } from "react";

import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardLink,
  CardFooter,
  Row,
  Col
} from "reactstrap";

import moment, * as moments from 'moment';

import { connect } from "react-redux";
import { getAllPosts } from "../../actions/post";
import post from "../../reducers/post";
class FeaturedPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allPosts: []
    };
  }
  componentWillMount = () => {
    this.props.getAllPosts().then(res => {
      this.setState({
        allPosts: res.payload.data
      });
    });
  };
  render() {
    return (
      <div>
        {this.state.allPosts.map((post, index) => {
          return (
            <div key={index}>
              <Card>
                <CardBody>
                  <CardText className="text-center">
                  {moment(post.date, 'YYYY-MM-DD HH:MM:ss').unix()}
                  </CardText>
                  <h3 className="text-center">
                    <b>{post.title}</b>
                  </h3>
                  <p className="text-center ">
                    <CardLink className="text-uppercase text-warning">
                      {post.tags.join(" / ")}
                    </CardLink>
                  </p>
                </CardBody>
                <img src={post.photosUrl} width="100%" alt="" />
                <CardBody>
                  {post.content.map((paragraph, index) => {
                    return <CardText key={index}>{paragraph}</CardText>;
                  })}
                </CardBody>
                <CardFooter className="gray-background">
                  <Row>
                    <Col sm="4">
                      <div className="about-image">
                        <img
                          src="https://scontent.ffjr1-4.fna.fbcdn.net/v/t1.0-9/31490594_10216669808566432_3735181059290174503_n.jpg?_nc_fx=ffjr1-1&_nc_cat=0&oh=69a9146ff5da92101ca90a2b5ca225a0&oe=5BE335E6"
                          alt=""
                        />
                      </div>
                    </Col>
                    <Col>
                      <div className="about-author">
                        <CardTitle>
                          <b>{post.author}</b>
                        </CardTitle>
                        <p className="summary">
                          Share a little biographical information to fill out
                          your profile. This may be shown publicly.<a>
                            {" "}
                            View all posts by Victor
                          </a>
                        </p>
                      </div>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </div>
          );
        })}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    getAllPosts: state.getAllPosts.getAllPosts
  };
}
export default connect(
  mapStateToProps,
  { getAllPosts }
)(FeaturedPost);
