import React, { Component } from "react";

class CreatePost extends Component {
  componentWillMount = () => {
    console.log("Create Post Page.");
  };
  render() {
    return (
      <div>
        <p>This is a create post page.</p>
      </div>
    );
  }
}
export default CreatePost;
