import React from "react";
import { useState } from "react";

function Chat(props) {
  
  const [msg, setmsg] = useState("");//  this.state = {msg: ''};

  const inputChangeHandler = (e) => setmsg(e.target.value); // this.setState({ msg: e.target.value });

  return (
    <div>
      <h1>{props.user} </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.SendMsg(msg);// this.props.SendMsg(this.state.msg);
          setmsg("");
        }}
      >
        <input
          type="text"
          placeholder="Ecrire un message"
          onChange={inputChangeHandler}
          value={msg}// this.state.msg
        ></input>
        <input type="submit"></input>
      </form>

      <h4>Message</h4>
      <h5> {props.ChatMessage} </h5>
    </div>
  );
}

export default Chat;
