import React from 'react'
import video from './assets/porsche.mp4'

export default function Home() {


  return (
    <div className='videoContainer' >
        <div className="video">
            <video src={video} autoPlay loop muted />
        </div>

    </div>
  )
}
