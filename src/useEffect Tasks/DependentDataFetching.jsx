import React, { useState,useEffect } from 'react'

export default function DependentDataFetching() {

    const [postsList,setPostsList] = useState([]);
    const [commentList,setCommentList] = useState([]) 
    const [commentId,setCommentId] = useState('')

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => {
          console.log("Posts Requested");
          setPostsList(data)
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, [])


    useEffect(() => {
        console.log("Comment Id: "+commentId);
        if(commentId)
        {
            fetch(`https://jsonplaceholder.typicode.com/comments?postId=${commentId}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("Comments Requested");
          setCommentList(data)
          console.log(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
        }
    }, [commentId])

    const commentFetchHandler=(value)=>{
        setCommentId(value) 
        console.log(commentList);
    }

    return (
        <div>
          <table>
            <thead>
              <tr style={{ color: 'black', fontWeight: 'bold' }}>
                <td>ID</td>
                <td>UserID</td>
                <td>Title</td>
                <td>Body</td>
                <td>Details</td>
              </tr>
            </thead>
            <tbody>
              {postsList.map((e) => (
                <tr key={e.id}>
                  <td>{e.id}</td>
                  <td>{e.userId}</td>
                  <td>{e.title}</td>
                  <td>{e.body}</td>
                  <td>
                    <button onClick={() => commentFetchHandler(e.id)}>Detail</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {commentList.length > 0 && (
            <div>
              <h1>Comments</h1>
              <ul style={{color:'black'}}>
                {commentList.map((comment) => (
                  <li key={comment.id}>
                    <p style={{color:'black'}}><strong style={{color:'black'}}>{comment.name}</strong>: {comment.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      );
}
