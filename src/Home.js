import React from 'react'
import Feedback from './Feedback'


const Home = ({feedbacks}) => {
  return (
    <div className='pageLayout'>
        {feedbacks.map((feedback) => (
          <Feedback 
            key = {feedback.id}
            feedback = {feedback}
          />
        ))}
    </div>
  )
}

export default Home