import React from 'react'


const Register = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className='logo'>Ahi Chat</span>
            <span className='title'>Register</span>
            <form>
                <input type="text" placeholder='display name' />
                <input type="email" placeholder='email' />
                <input type="password" placeholder='password' />
                <input style={{display:"none"}} type="file" id='file' />
                <label htmlFor="file">
                    <img src="" alt="add user photo" />
                    <span>Add an avatar</span>
                </label>
                <button>Sign up</button>
            </form>
            <p>Have an account? Login</p>
        </div>
    </div>
  )
}

export default Register