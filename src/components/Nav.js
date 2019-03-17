import React from 'react'
import Link from './Link';
import OuterLink from './OuterLink';

const Nav = props => {
  return (
    <div id="nav">
      <Link to={"Home"} class="home-nav-link" switchView={props.switchView} />
      <Link to={"About"} class="nav-link" switchView={props.switchView} />
      <Link to={"Coding"} class="nav-link" switchView={props.switchView} />
      <Link to={"Music"} class="nav-link" switchView={props.switchView} />
      <OuterLink to={"Writing"} url={"https://medium.com/@bethmschofield"} />
      <Link to={"Resume"} class="nav-link" switchView={props.switchView} />
    </div>
  )
}

export default Nav
