/** @format */

// import logo from './logo.svg';
import "./App.css";
import { useEffect } from "react";
import { useState } from "react";
import Messages from "./components/Messages";
import SendNewMessage from "./components/SendNewMessage";

function App() {
  const [data, setData] = useState("");
  const [fetching, setFetching] = useState(false);
  const [message, setMessage] = useState("");
  const [changes, setChanges] = useState(true);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        console.log(json);
      });

    // fetch("http://127.0.0.1:8000/api/", {
    //   method: "GET",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    // })
    //   .then((res) => {
    //     // res.json();
    //     console.log(res.json());
    //     setFetching(false);
    //   })
    //   .then((json) => {
    //     console.log(json);
    //     setData(json);
    //     setFetching(true);
    //   });
  }, [changes]);

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);

    fetch("http://127.0.0.1:8000/api/create", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: "testbot",
        message: message,
      }),
    });
    console.log(changes);
    setChanges(!changes);
    console.log(changes);
  };

  let handleRetrieve = () => {};

  return (
    <div className="App">
      <h2>Hello World</h2>
      <Messages data={data} />

      <SendNewMessage
        handleSubmit={handleSubmit}
        message={message}
        setMessage={setMessage}
      />
    </div>
  );
}

export default App;
