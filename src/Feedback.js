import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";

const Feedback = ({feedback, dateFormat}) => {

    return (
        
        <div className='feedback'>
            <div className='profilePic'>
                <FaRegUserCircle  id='userPic'/>
            </div>
            <div>
                <p>
                    {(feedback.body).length > 25 ? `${(feedback.body).slice(0, 25)}...see more` : feedback.body}
                </p>
                <p id='author'>{feedback.author}</p>
                <p id='date'>{dateFormat}</p>
            </div>
        </div>
    )
}

export default Feedback