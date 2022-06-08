import React from "react";
import BlogPost from "./blog";

const Home = (props) => {
  let blogContent;

  if (props.blogData.length > 0) {
    blogContent = props.blogData.map((blogData) => (
      <BlogPost key={blogData.id} blogData={blogData} />
    ));
  }

  return (
    <React.Fragment>
      <div className="container">{blogContent}</div>
    </React.Fragment>
  );
};

export default Home;
