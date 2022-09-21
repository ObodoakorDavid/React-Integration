/** @format */

import React from "react";

const SendNewMessage = ({handleSubmit, message, setMessage}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => {
            console.log(e.target.value);
            setMessage(e.target.value);
          }}
          type="text"
          value={message}
        />
        <button>Send</button>
      </form>
    </div>
  );
};

export default SendNewMessage;
