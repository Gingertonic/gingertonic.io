import React from 'react'
import bio from '../content/bio'

const About = props => {
  const renderBio = bio.map(para => <p className="bio-para">{para}</p>)
  return (
    <React.Fragment>
      {renderBio}
    </React.Fragment>
  )
}

export default About
