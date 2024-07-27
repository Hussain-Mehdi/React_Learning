import React, { useState, useEffect } from "react";
import "./DependentDataFetching.css";
export default function DependentDataFetching() {
  const [postsList, setPostsList] = useState([]);
  const [commentList, setCommentList] = useState([]);
  const [commentId, setCommentId] = useState("");
  const [isImageVisible, setIsImageVisible] = useState(false)

  useEffect(() => {
    fetch("https://picsum.photos/v2/list")
      .then((res) => res.json())
      .then((data) => {
        console.log("Posts Requested" + data);
        setPostsList(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    console.log("Comment Id: " + commentId);
    if (commentId) {
      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${commentId}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("Comments Requested");
          setCommentList(data);
          console.log(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, [commentId]);

  const commentFetchHandler = (value) => {
    setCommentId(value);
    console.log(commentList);
  };

  const imageHandler = () => {
    const imageVisi=!isImageVisible;
    setIsImageVisible(imageVisi);
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", margin: "auto" }}>
      {postsList.map((e) => (
        <div
          className="image-card"
          style={{
            width: "300px",
            background: "white",
            height: "350px",
            borderRadius: "10px",
            boxShadow: "0 1px 2px 2px rgba(0,0,0,0.1)",
            margin: "25px",
            overflow: "hidden",
            transition: "1s all ease",
          }}
        >
          <img
            onClick={imageHandler}
            style={{
              width: "290px",
              height: isImageVisible ? "340px" : "200px",
              borderRadius: "10px",
              objectFit: "cover",
              margin: "5px",
              
              transition:'1s all ease'
            }}
            src={e.download_url}
            alt=""
          />
          {
            !isImageVisible&&<p style={{ margin: "10px", padding: "0", textAlign: "center" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            delectus cum mollitia provident? Tempora laborum aperiam accusamus
            consectetur temporibus aliquid dolore adipisci laudantium,
            distinctio autem doloremque magnam cumque veritatis asperiores!
          </p>
          }
        </div>
      ))}
      {/* <table>
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
          )} */}
    </div>
  );
}
