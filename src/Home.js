import React from 'react'
import Feedback from './Feedback'


const Home = ({feedbacks, dateFormat}) => {
  return (
    <div className='pageLayout'>
        {feedbacks.map((feedback) => (
          <Feedback 
            key = {feedback.id}
            feedback = {feedback}
            dateFormat = {dateFormat}
          />
        ))}
    </div>
  )
}

export default Home