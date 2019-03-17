import React from 'react'

const Project = props => {
  return (
    <div className="project-card">
      <a className="centered" href={props.project.url}><img className="project-image" src={props.project.image} /></a>
      <p className="centered">{props.project.name}</p>
    </div>
  )
}

export default Project
