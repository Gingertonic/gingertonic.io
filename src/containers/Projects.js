import React, { Component } from 'react'
import projects from '../content/projects'

class Projects extends Component {


  render = () => {
    const renderProjects = projects.map(p => p.name)
    return (
      <React.Fragment>
        {renderProjects}
      </React.Fragment>
    )
  }
}

export default Projects
