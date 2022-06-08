import React from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDelete } from "./delete";

const EditBlog = (props) => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [singleBlogPost, setSingleBlogPost] = useState([
    {
      title: undefined,
      authorName: undefined,
      description: undefined,
    },
  ]);

  const Delete = useDelete();


  //getting the bloag post of a particle id to show on the page to edit
  const url = `http://localhost:3000/blogs/${userId}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setSingleBlogPost([
          {
            title: data.title,
            authorName: data.authorName,
            description: data.description,
          },
        ]);
      });
  }, []);

  const [title, setTitle] = useState(singleBlogPost[0].title);
  const [author, setAuthor] = useState(singleBlogPost[0].authorName);
  const [des, setDes] = useState(singleBlogPost[0].description);

  //setting the values of the input values again using useEffect after getting the response from the json-server
  useEffect(() => {
    setTitle(singleBlogPost[0].title);
    setAuthor(singleBlogPost[0].authorName);
    setDes(singleBlogPost[0].description);
  }, [singleBlogPost]);

  //sending update request to the server to change the values

  const handleSave = async () => {
    await fetch(`http://localhost:3000/blogs/${userId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        authorName: author,
        description: des,
      }),
    })  
      .then((res) => res.json())
      .then((data)=>{
        Delete.postEdited(data)
      })

      alert('Changes Saved')
      navigate('/')

  };
  return (
    <React.Fragment>
      <div className="container single-blog-post">
        <div className="row">
          <div className="col-12">
            <h4>Title:</h4>
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            ></input>
          </div>
          <div className="col-12">
            <h4>Author:</h4>
            <input
              type="text"
              value={author}
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
            ></input>
          </div>
          <div className="col-12">
            <h4>Description:</h4>
            <textarea
              value={des}
              onChange={(e) => {
                setDes(e.target.value);
              }}
            ></textarea>
          </div>
        </div>
        <button onClick={handleSave}>Save Changes</button>
      </div>
    </React.Fragment>
  );
};

export default EditBlog;
