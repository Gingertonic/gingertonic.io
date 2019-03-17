import React from 'react'
import BlogPost from '../components/BlogPost';
import blogPosts from '../content/blogPosts'

const Words = props => {
  const renderBlogPosts = blogPosts.map(bp => <BlogPost key={bp.id} post={bp}/>)
  return (
    <React.Fragment>
      <li><a href="https://medium.com/@bethmschofield"><code>Check out my Medium</code></a></li>
      {renderBlogPosts}
    </React.Fragment>
  )
}

export default Words
