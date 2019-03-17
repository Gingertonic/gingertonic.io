import React from 'react'
import Link from './Link';

const Nav = props => {
  return (
    <div id="nav">
      <Link to={"About"} switchView={props.switchView} />
      <Link to={"Resume"} switchView={props.switchView} />
      <Link to={"Home"} switchView={props.switchView} />
      <Link to={"Writing"} switchView={props.switchView} />
      <Link to={"Coding"} switchView={props.switchView} />
    </div>
  )
}

export default Nav
