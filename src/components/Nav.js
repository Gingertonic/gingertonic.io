import React from 'react'
import Link from './Link';

const Nav = props => {
  return (
    <div id="nav">
      <Link to={"Resume"} switchView={props.switchView} />
      <Link to={"Words"} switchView={props.switchView} />
      <Link to={"Projects"} switchView={props.switchView} />
    </div>
  )
}

export default Nav
