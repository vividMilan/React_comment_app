import React from 'react'

const Post = ({feedbackBody, setFeedbackBody, feedbackAuthor, setFeedbackAuthor, handleSubmit}) => {
  return (
    <div className='pageLayout'>
      <h3>Post Your Comment</h3>
      <form className='formPage' onSubmit={handleSubmit}>
        <input
          required
          type='text'
          placeholder='Enter Your Name'
          value = {feedbackAuthor}
          onChange = {(e) => {setFeedbackAuthor(e.target.value)}}
        />
        <textarea 
          required
          placeholder='Type a Comment'
          value = {feedbackBody}
          onChange= {(e) => {setFeedbackBody(e.target.value)}}
        />
        <button type='submit'>Comment</button>
      </form>
    </div>
  )
}

export default Post