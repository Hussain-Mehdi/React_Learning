import React, { useState } from "react";
import "./CircularAvatar.css";
import ReactDOM from "react-dom";

const ShowDetail = (props) => {
  return (
    <>
      <div className="detail-container">
        <header className="detail-header">
        <img id="detail-image"
        src="https://4.bp.blogspot.com/-JN_aIHFZFn4/Ue4FREm0CNI/AAAAAAAAKiU/WhKJb6EmxNY/s640/photo+1.JPG"
        alt=""
      />
          <button id="follow-button">Follow</button>
        </header>
        <div className="detail-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quae!
            Veniam dolorum natus commodi exercitationem iure sint unde quam?
            Iure corrupti fugiat inventore! Fugit totam molestiae distinctio
            optio laudantium blanditiis.
          </p>
        </div>
      </div>
    </>
  );
};

const CircularImage = (props) => {

  const showDetailsOnTop = () => {
    props.onMouseHover(true);
  };

  const hideDetailsOnTop = () => {
    props.onMouseHover(false);
  };

  return (
    <div
      className="circular-avatar"
      onMouseOver={showDetailsOnTop}
      onMouseLeave={hideDetailsOnTop}
    >
      <img
        src="https://4.bp.blogspot.com/-JN_aIHFZFn4/Ue4FREm0CNI/AAAAAAAAKiU/WhKJb6EmxNY/s640/photo+1.JPG"
        alt=""
      />
    </div>
  );
};

const CircularAvatar = () => {
  const [showDeatils, setShowDetails] = useState(false);

  const showHandler = (value) => {
    console.log("Value is added");
    setShowDetails(value);
  };

  return (
    <>
      <CircularImage onMouseHover={showHandler} />
      {showDeatils &&
        ReactDOM.createPortal(
          <ShowDetail />,
          document.getElementById("overlay")
        )}
    </>
  );
};

export default CircularAvatar;
