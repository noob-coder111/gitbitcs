import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDelete } from "./delete";
import Header from "./header";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Navbar from "./navbar";
import SingleBlogPage from "./singleblog";
import EditBlog from "./edit";

function App() {
  const [blogData, setBlogData] = useState([]);
  const Delete = useDelete();

  const url = "http://localhost:3000/blogs";

  //getting posts from the json-server
  useEffect(() => {
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setBlogData(data);
      });
  }, [Delete]);

  return (
    <React.Fragment>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home blogData={blogData} />} />
        <Route path="/home" element={<Home blogData={blogData} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/:userId" element={<SingleBlogPage />} />
        <Route path="/blog/edit/:userId" element={<EditBlog />} />
      </Routes>{" "}
    </React.Fragment>
  );
}

export default App;
