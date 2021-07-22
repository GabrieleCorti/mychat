import React from 'react'
import {ChatBox, InputBox, TextBox, BtnSubmit} from './ChatS';
import openSocket from 'socket.io-client';

const Chat = () => {
    const socket =  openSocket('http://localhost:5000', { transports: ["websocket"] });

    return (
        <div>
            <ChatBox>

            </ChatBox>
            <InputBox>
                <TextBox type="text" id='text' name='text' />
                <BtnSubmit>Send</BtnSubmit>
            </InputBox>
        </div>
    )
}

export default Chat
