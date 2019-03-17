import React from 'react'
import Logo from './Logo';

const Nav = props => {
  return (
    <div id="main" className="centered">
      <Logo openVideo={props.openVideo} />
      <p>
        <code>Gingertonic</code><br/>
        <code id="tag-line">Circus Musician who ran away with the Coders</code>
      </p>
    </div>
  )
}

export default Nav
