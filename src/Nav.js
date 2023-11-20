import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='navBar'>
      <Link to='/'>
        <Button 
            buttonText = "Home"
        />
      </Link>
      <Link to="/post" >
        <Button 
            buttonText = "Post"
        />
      </Link>

    </nav>
  )
}

export default Nav