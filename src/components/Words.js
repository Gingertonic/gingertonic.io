import React from 'react'
import BlogPost from '../components/BlogPost';
import blogPosts from '../content/blogPosts'

const Words = props => {
  const renderBlogPosts = blogPosts.map(bp => <BlogPost key={bp.id} post={bp}/>)
  return (
    <React.Fragment>
      <div id="blog-header">
        <p><a href="https://medium.com/@bethmschofield"><code>Check out my Medium</code></a></p>
      </div>
    {renderBlogPosts}
    </React.Fragment>
  )
}

export default Words
