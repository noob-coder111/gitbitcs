import React from "react";
import { useNavigate } from "react-router-dom";
import { useDelete } from "./delete";

const BlogPost = (props) => {
  const navigate = useNavigate();
  const url = `http://localhost:3000/blogs/${props.blogData.id}`;

  //using the delete context to update the delete value after a post delete
  const Delete = useDelete();

  const handleShow = () => {
    navigate(`/blog/${props.blogData.id}`);
  };

  const handleEdit = () => {
    navigate(`/blog/edit/${props.blogData.id}`);
  };

  //sending DELETE request to the json-server
  const handleDelete = async () => {
    await fetch(url, {
      method: "DELETE",
    });
    Delete.postDeleted(props.blogData.id + 1);
  };

  return (
    <React.Fragment>
      <div className="row box">
        <div className="row col-8 blog-content">
          <div className="col-12 title">
            <h3>{props.blogData.title}</h3>
          </div>
          <div className="col-12 author">
            <p>by {props.blogData.authorName}</p>
          </div>
          <div className="col-12 des">
            <h5>{props.blogData.description}...</h5>
          </div>
        </div>
        <div className="row col-4 buttons">
          <button onClick={handleShow}>Show</button>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BlogPost;
