import React from 'react';
import './style.css';

// existe outra forma de acessar a propriedade ({title,cover, body,id}) => {};
export const PostCard= ({post}) => {
    return(
     <div className ="post"> 
        <img src = {post.cover} alt = {post.title} />
        <div className="post-content">
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
     </div>  
    )
}