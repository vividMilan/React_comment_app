import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import Post from "./Post";
import { useState } from "react";

function App() {

  const [feedbacks, setFeedbacks] = useState([
    {
      id: 1,
      body: "Jil Jung Juk 😁",
      author: "Milan"
    },
    {
      id: 2,
      body: "Freedom 🥶",
      author: "Adele"
    },
    {
      id: 3,
      body: "This site is awesome 🔥",
      author: "Dihan"
    },
  ])


  return (
    <div className="App">
      <Header 
        title="Comment App"
        />
      <Nav />
      <Routes>
        <Route path="/" element = { <Home 
          feedbacks = {feedbacks}
        /> } />
        <Route path="/post" element = { <Post /> } />
      </Routes>
    </div>
  );
}

export default App;
