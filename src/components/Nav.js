import React from 'react'
import Link from './Link';
import OuterLink from './OuterLink';

const Nav = props => {
  return (
    <div id="nav">
      <Link to={"About"} switchView={props.switchView} />
      <Link to={"Resume"} switchView={props.switchView} />
      <Link to={"Home"} switchView={props.switchView} />
      <OuterLink to={"Writing"} url={"https://medium.com/@bethmschofield"} />
      <Link to={"Coding"} switchView={props.switchView} />
    </div>
  )
}

export default Nav
