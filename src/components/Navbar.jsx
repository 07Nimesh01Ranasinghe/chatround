import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Ahi Chat</span>
      <div className="user">
        <img src="" alt="user dp" />
        <span>Jhon</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar