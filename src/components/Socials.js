import React from 'react'

const Socials = () => {
  return (
    <div id='socials'>
      <a
        className="App-link"
        href="https://twitter.com/GingertonicSt"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="social" src='/socials/twitter.svg' alt="twitter"/>
      </a>
      <a
        className="App-link"
        href="https://github.com/Gingertonic"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="social" src='/socials/github.svg' alt="github"/>
      </a>
      <a
        className="App-link"
        href="https://www.youtube.com/playlist?list=PLbVocVe1GMcGyumY0oPHLfiQQTBl8-6Tg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="social" src='/socials/youtube.svg' alt="youtube"/>
      </a>
    </div>
  )
}

export default Socials
