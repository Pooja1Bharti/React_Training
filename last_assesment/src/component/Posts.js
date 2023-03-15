import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Posts() {

    const [posts,setPosts] = useState([])
    const [comments,setComments] = useState([])

      useEffect(() => { 
        axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => {
            setPosts(res.data);
            console.log('axios posts --->',posts)
        })
        axios.get(`https://jsonplaceholder.typicode.com/comments`).then(res => {
            setComments(res.data);})
       }, [posts,comments])
    

  return (
    <div className="container">
    <div className="jumbotron-div col s12">
        <ul className="collection">
            {console.log('render :: ', posts)}
            {posts.map(post =>
                (
                    <div>
                        <li
                            key={post.id}
                            className="collection-item left-align red lighten-3"
                        >
                            <h5>User ID: {post.id}</h5>
                            <p>Post: {post.body}</p>
                        </li>
                        <div className="jumbotron-div col s12">
                            <ul className="collection">
                                {
                                    comments.map(comment => (
                                        <li
                                            key={comment.id}
                                            className="collection-item left-align purple lighten-2"
                                        >
                                            <p>User ID: {comment.id}</p>
                                            <p>Post: {comment.body}</p>
                                        </li>
                                    )
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                ))
            }
        </ul>
    </div>
</div>
  )
}

export default Posts