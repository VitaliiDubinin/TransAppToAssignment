import React from "react";
// import "./Popupstyle.css";

const Popup = (props) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.close}>
          x
        </span>

        <h1> words are sended, try to catch they up in vocabulary :)</h1>
      </div>
    </div>
  );
};

export default Popup;
