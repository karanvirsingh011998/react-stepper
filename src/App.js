import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import ThemedButton from "./button";

function App() {
  // const onSubmit = async () => {
  //   try {
  //     const data = {
  //       email: name,
  //       password: pass,
  //     };
  //     const res = await axios.post(
  //       "https://wil-que-mongo-backend.onrender.com/api/authenticate",
  //       {}
  //     );
  //     if (res.status === 200) {
  //       alert("success");
  //     }
  //   } catch (err) {
  //     alert("Something Incorrect");
  //   }
  // };

  // get using fetch
  // const [user, setUser] = useState([]);
  // async function usingAxios() {
  //   const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
  //   console.log("res.data", res.data);
  // }
  // const fetchData = () => {
  //   return fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((json) => setUser(json));
  // };
  // console.log("user", user);
  // useEffect(() => {
  //   fetchData();
  //   usingAxios();
  // }, []);

  // post using fetch
  // const navigate = useNavigate();
  const [post, setPost] = useState();
  const [data, setData] = useState();
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const postData = {
    title: title,
    body: body,
  };
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST,PATCH,OPTIONS",
  };
  const obj = {
    method: "Post",
    headers: headers,
    body: JSON.stringify(postData),
  };

  const fetchPosts = async () => {
    return await fetch("https://jsonplaceholder.typicode.com/posts ")
      .then((res) => res.json())
      .then((data) => setData(data));
  };
  const fetchPostData = async () => {
    return await fetch("https://jsonplaceholder.typicode.com/posts", obj)
      .then((res) => res.json())
      .then((data) => setPost(data));
  };
  const showPost = async () => {
    return await fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => setPost(data));
  };
  const size = 10;

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div className="postData">
            <h3>Post Data</h3>
            <label>Title</label> :{" "}
            <input
              type="text"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <br />
            <br />
            <label>Body</label> :{" "}
            <input
              type="text"
              onChange={(e) => {
                setBody(e.target.value);
              }}
            />
            <br />
            <br />
            <button onClick={() => fetchPostData()}>Submit</button>
          </div>
          {post && (
            <>
              <div>Posts</div>
              <div>{post?.title}</div>
              <div>{post?.body}</div>
            </>
          )}
          <button onClick={() => fetchPosts()}>Get Posts</button>
          {data && (
            <>
              <div>All Posts</div>
              {data
                ?.reverse()
                .slice(0, size)
                .map((posts) => {
                  return (
                    <div key={posts?.id}>
                      <div>Title : {posts?.title}</div>

                      {/* <button onClick={() => navigate("/details")}>
                        Show More Data
                      </button> */}
                    </div>
                  );
                })}
            </>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
