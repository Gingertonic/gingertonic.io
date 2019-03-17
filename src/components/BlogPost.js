import React from 'react'

const BlogPost = props => {
  return (
    <div className="blogpost-card">
      <a className="centered" href={props.post.url}><img className="blogpost-image" src={props.post.image} alt="blogpost thumbnail"/></a>
      <p className="centered">{props.post.title}</p>
    </div>
  )
}

export default BlogPost
