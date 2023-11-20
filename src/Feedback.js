import React from 'react'

const Feedback = ({feedback}) => {

    const date = new Date()
    const [year, month, day] = [
        date.getFullYear(),
        date.getMonth(),
        date.getDay()
    ]

    const dateFormat = `${day}/${month}/${year}`

    return (
        
        <div className='feedback'>
            <div className='profilePic'></div>
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