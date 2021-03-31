import './style.css';

//importação dos componentes 
import {Component} from 'react';
import{Posts} from '../../components/Posts';
import {loadPosts} from '../../components/utils';
import { Button } from '../../components/Button';

 class Home extends Component {
    state = {
      posts: [],
      allPosts: [],
      page: 0,
      postsPerPage: 2

    };

    async componentDidMount(){
      this.loadPosts();
    }
    loadPosts =async () => {
      const {page, postsPerpage} = this.state; 
      const postsAndPhotos = await loadPosts();
      this.setState({
        posts: postsAndPhotos.slice(0,2),
        allPosts: postsAndPhotos,

      });
    } 
    loadMorePosts = () => {
      const {
        page,
        postsPerPage,
        allPosts,
        posts
      }= this.state; 

      const nextPage = page + postsPerPage; 
      const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
      posts.push(...nextPosts);

      this.setState({posts, page: nextPage}); 

      
    }

    //render
    render(){
      const {posts, page, postsPerPage, allPosts} = this.state; 
      const noMorePosts = page + postsPerPage >= allPosts.length; 

      return (
        <section className ="container">   
           <Posts posts = {posts}/>

          <div className = "butto-container"> 
           <Button
            disabled = {noMorePosts}
            text="Load more posts"
            onClick = {this.loadMorePosts}
           />
         </div>  
        </section>  
    ); 

  }
}

export default Home;