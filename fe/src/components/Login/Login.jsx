import React from 'react'
import {Page, LogIn, Title, Input, Label, LogInBtn} from './LoginS';
import { useState } from 'react';
import { useHistory } from "react-router-dom";


const Login = () => {

    const [logInfo, setLogInfo] = useState({name: 'unknown', room: ''})
    let history = useHistory();


    const GoToRoom = () => {
        if (logInfo.name && logInfo.room) {
            localStorage.setItem('name', logInfo.name );
            localStorage.setItem('room', logInfo.room );
            history.push('/room');
        }
    }

    return (
        <Page>
            <LogIn>
                <Title>LogIn</Title>
                <Label htmlFor="name">Name:</Label>
                <Input type="text" name="name" id="name" onChange={e => setLogInfo({name: e.target.value, room: logInfo.room})} />

                <Label htmlFor="room">Room ID:</Label>
                <Input type="text" name="room" id="room" onChange={e => setLogInfo({name: logInfo.name, room: e.target.value})} />

                <LogInBtn onClick={GoToRoom}>LogIn</LogInBtn>
            </LogIn>
        </Page>
    )
}

export default Login
