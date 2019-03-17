import React from 'react'

const Logo = props => {
  return (
    <img src='/gingertonic.jpeg' className="gingertonic-logo" alt="logo" onClick={props.openVideo}/>
  )
}

export default Logo
