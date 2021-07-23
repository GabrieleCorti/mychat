import React from "react";
import { Page, LogIn, Title, Input, Label, LogInBtn } from "./LoginS";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [logInfo, setLogInfo] = useState({ name: "unknown", room: "" });
  let history = useHistory();

  const GoToRoom = () => {
    if (logInfo.name && logInfo.room) {
      localStorage.setItem("name", logInfo.name);
      localStorage.setItem("room", logInfo.room);
      try {
        axios({
          method: "post",
          url: "http://localhost:5000/login",
          data: {
            name: logInfo.name,
          },
        }).then((res) => {
          if (res.data !== {}) {
            localStorage.setItem("token", res.data.token);
            history.push("/room");
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Page>
      <LogIn>
        <Title>LogIn</Title>
        <Label htmlFor="name">Name:</Label>
        <Input
          type="text"
          name="name"
          id="name"
          onChange={(e) =>
            setLogInfo({ name: e.target.value, room: logInfo.room })
          }
        />

        <Label htmlFor="room">Room ID:</Label>
        <Input
          type="text"
          name="room"
          id="room"
          onChange={(e) =>
            setLogInfo({ name: logInfo.name, room: e.target.value })
          }
        />

        <LogInBtn onClick={GoToRoom}>LogIn</LogInBtn>
      </LogIn>
    </Page>
  );
};

export default Login;
