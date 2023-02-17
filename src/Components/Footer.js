import React from 'react'
import git from './assets/github.svg'

export default function Footer() {
  return (
    <div className='github' >
        <img src={git} alt="" />
        <a href="https://github.com/pavlosantoniou13">Pavlos Antoniou</a>
    </div>
  )
}
