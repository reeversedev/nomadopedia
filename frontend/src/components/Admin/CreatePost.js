import React, { Component } from "react";
import _ from "lodash";

import { connect } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { createPost } from "../../actions/post";

import "regenerator-runtime/runtime";

import { Form, FormGroup, Input, Row, Col, Label, Container } from "reactstrap";
import AllPosts from "./AllPosts";
class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pCount: 1,
      title: "",
      subtitle: "",
      tags: [],
      type: "draft",
      photourl: "",
      paragraph: []
    };
  }
  addParagraph = () => {
    this.setState({
      pCount: this.state.pCount + 1
    });
    console.log(this.state.pCount);
  };
  handleTags = e => {
    let tags = e.target.value.split(",");
    this.setState({
      tags: tags
    });
  };
  handleParagraphs = (index, e) => {
    let array = this.state.paragraph.slice();
    array[index] = e.target.value;
    this.setState({
      paragraph: array
    });
  };
  submitPost = async () => {
    let postData = await {
      data: {
        title: this.state.title,
        tags: this.state.tags,
        content: this.state.paragraph,
        author: "Sorabh Bothra",
        type: this.state.type,
        url: this.state.url,
        subtitle: this.state.subtitle
      }
    };
    // await this.props.createPost(postData, this.successCallBack);
    await this.props.createPost(postData).then(result => {
      this.makeAToast(result.payload.data);
    });
  };
  makeAToast = data => {
    if (data.type === "success") {
      toast.success(data.text);
    } else {
      toast.error(data.text);
    }
  };
  successCallBack = () => {
    this.setState({
      createdPost: true
    });
  };
  handleType = e => {
    this.setState({
      type: e.target.value
    });
  };
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col sm="6">
              <div className="mt-4">
                <div>
                  <ToastContainer />
                </div>
                <div className="row">
                  <div className="col-6">
                    <h1>Create Post</h1>
                  </div>
                  <div className="col-6">
                    <button
                      className="btn btn-success"
                      onClick={this.submitPost}
                    >
                      Publish Post
                    </button>
                  </div>
                </div>
              </div>
              <Form className="mt-4">
                <FormGroup row>
                  <Label for="title" sm={2}>
                    Title
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="text"
                      name="title"
                      placeholder="Title of the Post"
                      onChange={e => this.setState({ title: e.target.value })}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="subtitle" sm={2}>
                    Subtitle
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="text"
                      name="subtitle"
                      placeholder="Subtitle of the Post"
                      onChange={e =>
                        this.setState({ subtitle: e.target.value })
                      }
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="tag" sm={2}>
                    Tags
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="text"
                      name="tag"
                      placeholder="Seperate the tags using commas. Ex: Lifestyle, Travel"
                      onChange={this.handleTags}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="type" sm={2}>
                    Type
                  </Label>
                  <Col sm={10}>
                    <Input type="select" name="type" onChange={this.handleType}>
                      <option>Draft</option>
                      <option>Active</option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="url" sm={2}>
                    Photo URL
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="url"
                      name="url"
                      placeholder="Photo URL"
                      onChange={e => this.setState({ url: e.target.value })}
                    />
                  </Col>
                </FormGroup>
                {_.times(this.state.pCount, i => {
                  return (
                    <FormGroup row key={i}>
                      <Label for="content" sm={2}>
                        Paragraph(
                        {i + 1})
                      </Label>
                      <Col sm={10}>
                        <Input
                          type="textarea"
                          name="content"
                          placeholder="Content Paragraph"
                          className="content-paragraph"
                          onChange={e => this.handleParagraphs(i, e)}
                        />{" "}
                        {i === this.state.pCount - 1 ? (
                          <div className="d-flex align-items-end justify-content-end mt-2">
                            <button
                              type="button"
                              onClick={this.addParagraph}
                              className="btn btn-primary"
                            >
                              Add
                            </button>
                          </div>
                        ) : (
                          ""
                        )}
                      </Col>
                    </FormGroup>
                  );
                })}
              </Form>
            </Col>
            <Col sm="6">
              <div className="mt-4">
                {/* {this.state.paragraph.map((val, index) => {
                  return <p key={index}>{val}</p>;
                })} */}
                <AllPosts />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

// function maptStateToProps(state) {
//   return {
//     createPost: state.createPost
//   };
// }

function mapStateToProps(state) {
  console.log("The state", state);

  return {
    createPost: state.createPost.createPost
  };
}

export default connect(
  mapStateToProps,
  { createPost }
)(CreatePost);
