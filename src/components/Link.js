import React from 'react'

const Link = props => {
  return (
    <div className="nav-link" onClick={() => props.switchView(props.to)}><code>{props.to}</code></div>
  )
}

export default Link
