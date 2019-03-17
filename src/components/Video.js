import React from 'react'

const Video = props => {
  return (
    <video id="introvid" className={props.state} onClick={() => props.close()} controls>
      <source src="/video/introvid.mp4" type="video/mp4"/>
      <source src="/video/introvid.ogg" type="video/ogg"/>
    Shucks, your browser does not support this... Please enjoy the gin though!
    </video>
  )
}

export default Video
