import React, { Component } from 'react'
import Project from '../components/Project';
import projects from '../content/projects'

class Projects extends Component {


  render = () => {
    const renderProjects = projects.map(p => <Project key={p.id} project={p}/>)
    return (
      <React.Fragment>
        {renderProjects}
      </React.Fragment>
    )
  }
}

export default Projects
