import React, { useEffect, useState } from "react";

export default function DataFetching() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log("Data has been fetched");
        console.log(data);
        setPostList(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="post-container">
      <table>
        <thead>
          <tr style={{color:'black', fontWeight:'bold'}}>
            <td>ID</td>
            <td>UserID</td>
            <td>Title</td>
            <td>Body</td>
          </tr>
        </thead>
        <tbody>
          {postList.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.userId}</td>
              <td>{e.title}</td>
              <td>{e.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
