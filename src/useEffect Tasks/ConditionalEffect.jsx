import React, { useEffect, useState } from "react";

export default function ConditionalEffect() {
  const [apiValue, setAPIValue] = useState("");
  const [debounce, setDebounce] = useState("");
  const [apiList,setApiList] = useState([])

  useEffect(() => {
    const handler = setInterval(() => {
      setDebounce(apiValue);
    }, 1000);

    return () => {
      clearInterval(handler);
    };
  }, [apiValue]);

  useEffect(() => {
    console.log("Requesting");
    if (debounce) {
      fetch(`https://jsonplaceholder.typicode.com/${apiValue}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("Requested");
          setApiList(data)
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
    return () => {
      console.log("CleanUp is called");
    };
  }, [debounce]);

  const onChangeAPIHandler = (event) => {
    setAPIValue(event.target.value);
    console.log(apiValue);
  };

  return (
    <div>
      <div
        style={{
          width: "60%",
          margin: "10px auto",
          background: "#E4E4E4",
          height: "50px",
          border: "0.3px solid #ccc",
          borderRadius: "5px",
          display: "flex",
        }}
      >
        <input
          type="text"
          placeholder="Search"
          onChange={onChangeAPIHandler}
          style={{
            flexGrow: 1,
            border: "none",
            outline: "none",
            backgroundColor: "transparent",
            margin: "2px",
          }}
        />
      </div>
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
          {apiList.map((e) => (
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
