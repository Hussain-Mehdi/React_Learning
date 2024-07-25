import React, { useState } from "react";
import "./CircularAvatar.css";
import ReactDOM from "react-dom";

const ShowDetail = (props) => {
  return (
    <>
      <div
        className="detail-container"
        
      >
        <header className="detail-header">
          <div className="profile-data">
            <img
              id="detail-image"
              src="https://4.bp.blogspot.com/-JN_aIHFZFn4/Ue4FREm0CNI/AAAAAAAAKiU/WhKJb6EmxNY/s640/photo+1.JPG"
              alt=""
            />
            <div>
              <h5>Chacha Buzurg</h5>
              <p>
                Software Engineer | React.Js | Asp.Net | Asp.Net Core | Web
                Development | HTML | CSS | Javascript | Bootstrap
              </p>
            </div>
          </div>
          <button id="follow-button">Follow</button>
        </header>
        <div className="detail-content">
          <p>
            Hello Connections, I am 90 year old software year engineer. I have
            worked on enterpise project such as microsoft and google. I'm
            looking for new role of software Engieer in Pakistan. Please
            consider my resume. I will be very happy to test your system and
            encourage the jounior and senior software developers. I can also
            handle the company management. When the manager will be absent I
            will take control of company
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
    props.onMouseHover(true);
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

  const [showOverlay, setShowOverlay] = useState(true);

  const onMouseHandler = (value) => {
    setShowOverlay(value);
  };

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
