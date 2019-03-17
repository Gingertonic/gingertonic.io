import React from 'react'

const Link = props => {
  return (
    <div className={props.class} onClick={() => props.switchView(props.to)}><code>{props.to}</code></div>
  )
}

export default Link
