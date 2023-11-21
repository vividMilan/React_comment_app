import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import Post from "./Post";
import { useState } from "react";

function App() {

  const date = new Date()
  const [year, month, day] = [
      date.getFullYear(),
      date.getMonth(),
      date.getDay()
  ]

  const dateFormat = `${day}/${month}/${year}`

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

  const navigate = useNavigate()

  const [feedbackBody, setFeedbackBody] = useState('')
  const [feedbackAuthor, setFeedbackAuthor] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = feedbacks.length ? feedbacks[feedbacks.length - 1 ].id + 1 : 1
    const newBody = feedbackBody
    const newAuthor = feedbackAuthor

    const newFeedback = {id, body: newBody, author: newAuthor}
    setFeedbacks((prevFeedbacks) => [...prevFeedbacks, newFeedback])
    setFeedbackBody('')
    setFeedbackAuthor('')
    navigate('/')
  }


  return (
    <div className="App">
      <Header 
        title="Comment App"
        />
      <Nav />
      <Routes>
        <Route path="/" element = { <Home 
          feedbacks = {feedbacks}
          dateFormat = {dateFormat}
        /> } />
        <Route 
          path="/post" 
          element = { 
            <Post 
              feedbacks = {feedbacks}
              feedbackAuthor = {feedbackAuthor}
              setFeedbackAuthor = {setFeedbackAuthor}
              feedbackBody = {feedbackBody}
              setFeedbackBody = {setFeedbackBody}
              handleSubmit = {handleSubmit}
            /> 
        } />
      </Routes>
    </div>
  );
}

export default App;
