import './style.css';
import {PostCard} from '../PostCard';

export const Posts = ({posts}) => {
  return (
    <div className="posts">
     {posts.map(post => (
        <PostCard 
         post={post}
        />
      ))}
   </div>
  )
}