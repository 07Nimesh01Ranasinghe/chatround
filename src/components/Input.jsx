import React from 'react'

const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Type Here'/>

      <div className="send">
        <img src="" alt="attach" />
        <input type="file" style={{display:"none"}} id='file'/>
        <label htmlFor="file">
          <img src="" alt="" />
        </label>

        <button>Send</button>

      </div>

    </div>
  )
}

export default Input