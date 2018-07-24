import React, { Component } from "react";
import _ from "lodash";

import { Form, FormGroup, Input, Row, Col, Label } from "reactstrap";
class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pCount: 1
    };
  }
  addParagraph = () => {
    this.setState({
      pCount: this.state.pCount + 1
    });
    console.log(this.state.pCount);
  };
  render() {
    return (
      <div>
        <Row>
          <Col sm="6">
            <div className="mt-4">
              <h1>Create Post</h1>
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
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="tag" sm={2}>
                  Tags
                </Label>
                <Col sm={10}>
                  <Input type="text" name="tag" placeholder="Tags" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="url" sm={2}>
                  Photo URL
                </Label>
                <Col sm={10}>
                  <Input type="url" name="url" placeholder="Photo URL" />
                </Col>
              </FormGroup>
              {_.times(this.state.pCount, i => {
                return (
                  <FormGroup row key={i}>
                    <Label for="content" sm={2}>
                      Paragraph({i + 1})
                    </Label>
                    <Col sm={10}>
                      <Input
                        type="textarea"
                        name="content"
                        placeholder="Content Paragraph"
                        className="content-paragraph"
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
        </Row>
        <Col />
      </div>
    );
  }
}
export default CreatePost;
