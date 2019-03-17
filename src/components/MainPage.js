import React from 'react'
import Logo from './Logo';

const Nav = props => {
  return (
    <React.Fragment>
      <Logo openVideo={props.openVideo} />
      <p>
        <code>Gingertonic</code><br/>
        <code id="tag-line">Circus Musician who ran away with the Coders</code>
      </p>
    </React.Fragment>
  )
}

export default Nav
