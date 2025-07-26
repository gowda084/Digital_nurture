import React from "react";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  // Fetch posts
  loadPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        // Limit to 10 posts
        this.setState({ posts: data.slice(0, 10) });
      })
      .catch((error) => alert("Error loading posts!"));
  }

  componentDidMount() {
    this.loadPosts();
  }

  render() {
    return (
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h1 style={{ textAlign: "center", color: "#333" }}>Blog Posts</h1>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
          {this.state.posts.map((post) => (
            <div
              key={post.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "15px",
                backgroundColor: "#fafafa",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            >
              <h2 style={{ fontSize: "18px", color: "#2c3e50" }}>{post.title}</h2>
              <p style={{ fontSize: "14px", color: "#555" }}>{post.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  componentDidCatch(error, info) {
    alert("Something went wrong in the component!");
  }
}

export default Posts;
