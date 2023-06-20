import Axios from 'axios'
import React, { Component } from 'react'
import PostItem from './PostItem'
// import BaseUrl from '../proxy'

// import WPPosts from '';

export class Posts extends Component {

    state = {
        posts: [],
        isLoaded: false
    }

    componentDidMount() {

        document.title = window.location.hostname + ": Blog";

        // Axios.get(`${BaseUrl}/wp-json/wp/v2/posts`)
        // .then(res => {            
        //     return ( this.setState({
        //     posts: res.data,
        //     isLoaded: true 
        //     }) ) 
        // }
        // )
        // .catch(err => console.log(err));

        fetch('./posts.json')
        .then((respo) => {
            return respo.json();
          })
          .then((data) => {
            this.setState({
                posts: data,
                isLoaded: true
            });
          });
    }

    render() {

        const { posts, isLoaded } = this.state;
        
        return (
            <section className="section-blog">
                <h1 className="section-heading">Blog posts</h1>
                {
                    isLoaded ? 
                    posts.map(post => (
                        <PostItem key={post.id} post={post} />
                    )) :
                    (<h1>Loading...</h1>)
                }
            </section>
        );
        }

}

export default Posts