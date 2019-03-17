import React from 'react'

const OuterLink = props => {
  return (
    <div className="nav-link"><a className="outer-nav" href={props.url} target="blank"><code>{props.to}</code></a></div>
  )
}

export default OuterLink
