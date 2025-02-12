import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const posts = [
    { id: 1, title: "First Blog Post", excerpt: "This is a short description." },
    { id: 2, title: "Second Blog Post", excerpt: "Another blog post summary." },
  ];

  return (
    <div>
      <h1>Welcome to My Blog</h1>
      {posts.map((post) => (
        <div key={post.id} className="card my-3">
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.excerpt}</p>
            <Link to={`/post/${post.id}`} className="btn btn-primary">
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
