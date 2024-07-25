import React, { useState } from "react";
import "./ErrorModal.css";
import ReactDOM from 'react-dom';

const BackDrop=props=>{
  return <div className="backdrop"></div>
}

const Overlay=props=>{
    return <div className="modal">
    <header>
      <h2>This is called Modal</h2>
    </header>
    <div className="content">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Consequatur voluptate quas tenetur aut corporis distinctio
        dignissimos soluta nulla necessitatibus minus suscipit dolores
        reiciendis blanditiis, ducimus commodi iste possimus sit harum!
      </p>
    </div>
    <footer>
      <button onClick={props.onModelClose}>Close</button>
    </footer>
  </div>
}

const ErrorModal = (props) => {
  const [showModel, setShowModel] = useState(false);

  const errorModalHandler = () => {
    props.onModelClose(false);
  };

  return (
    <>
    {ReactDOM.createPortal(<BackDrop/>,document.getElementById('backdrop'))}
    {ReactDOM.createPortal(<Overlay onModelClose={errorModalHandler}/>,document.getElementById('overlay'))}
    </>
  );
};

export default ErrorModal;
