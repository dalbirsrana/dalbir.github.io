// import Axios from 'axios'
import { Link, useParams } from 'react-router-dom'
// import BaseUrl from '../proxy'
import React, { useEffect, useState, useCallback } from 'react';

function PostPage() {

    // old Router v4 depricated
    // let postId = this.props.match.params.id 

    // new Router 6
    let { postId } = useParams();

    let [resData, setResData] = useState({
        title: { rendered: "loading" }, 
        content: { rendered: "loading" }
    });

    const fetchData = useCallback( (postId) => {
            let ID = parseInt( postId ) - 1;
            // Axios.get(`${BaseUrl}/wp-json/wp/v2/posts/${postId}`)
            // .then(res => {
            //      setResData({
            //         title: res.data.title,
            //         content: res.data.content
            //       });
            //       document.title = res.data.title.rendered;
            // })
            // .catch(err => console.log(err));

            fetch('./../posts.json')
            .then( (respo) => {
                return respo.json();
            } )
            .then( (data) => {
                setResData({
                    title: data[ID].title,
                    content: data[ID].content
                });
                document.title = data[ID].title.rendered;
            } );

        }, [])

    useEffect(() => {
        fetchData(postId)
    }, [fetchData, postId]);

    return (
        <section className="section-blog">
            <div className="floating-back-button">
                <Link to='/blog'> <i className="fas fa-chevron-left"></i> Blog Home</Link>
            </div>
            <div className="single-post hidden">
                <h1 className="section-heading" dangerouslySetInnerHTML={{ __html: resData.title.rendered }} />
                <div dangerouslySetInnerHTML={{ __html: resData.content.rendered }} />
            </div>
        </section>
    )
}
export default PostPage