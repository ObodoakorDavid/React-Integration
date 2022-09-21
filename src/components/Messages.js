/** @format */

import React from "react";

const Messages = ({data}) => {
  return (
    <div>
      {data &&
        data.map((datum) => {
          return (
            <div
              onClick={() => {
                console.log(datum.id);
                fetch(`http://127.0.0.1:8000/api/detail/${datum.id}`)
                  .then((res) => res.json())
                  .then((json) => {
                    console.log(json);
                  });
              }}
              className="eachMessage"
              key={datum.id}
            >
              {" "}
              <p>{datum.username} sent</p>
              <small>{datum.message}</small>
            </div>
          );
        })}

        
    </div>
  );
};

export default Messages;
