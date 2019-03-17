import React from 'react'

const Project = props => {
  return (
    <div className="project-card">
      <a className="centered" href={props.project.url}><img className="project-image" src={props.project.image} /></a>
      <h4 className="centered">{props.project.name}</h4>
      <p className="proj-desc">{props.project.description}</p>
      <p className="proj-desc">{props.project.stack}</p>
    </div>
  )
}

export default Project
