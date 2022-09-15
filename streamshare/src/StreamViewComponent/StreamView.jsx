import React from 'react'
import StreamChat from './StreamChat/StreamChat'
import './StreamView.css'

function StreamView() {
  

  return (
    <>
    <div className='stream-container'>
      
      <div classNmae='video-container'>
      </div>

      <div className='stream-chat'>
        <StreamChat/>
      </div>

    </div>
    
    </>
  )
}

export default StreamView