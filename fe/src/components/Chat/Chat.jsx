import React from 'react'
import {ChatBox, InputBox, TextBox, BtnSubmit} from './ChatS';
import {useState, useEffect, useRef } from 'react';
import openSocket from 'socket.io-client';
import io from 'socket.io-client';

const Chat = () => {
    
    /* const socket =  openSocket('http://localhost:5000', { transports: ["websocket"] }); */
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    const refSockets = useRef();
    useEffect(()=>{
        refSockets.current = openSocket('http://localhost:5000', { transports: ["websocket"] });

        refSockets.current.on('chat message', (msg)=>{
            setMessages([...messages, msg])
        })
    }, [messages]);

    const ReciveMessage = (msg) => {
        setMessages(oldMsg => [...oldMsg, msg ]);
    }

    const Send = (e) => {
        e.preventDefault();
        const messageInfo = {
            body: input
        }
        setInput('');
        refSockets.current.emit('chat message', messageInfo)
    }
    
    
    return (
        <div>
            <ChatBox>
                {
                    messages.map((e, index)=>{
                        return <div key={index}>{e.body}</div>
                    })
                }
            </ChatBox>
            <InputBox>
                <form onSubmit={Send}>
                    <TextBox type="text" id='text' name='text' onChange={e => setInput(e.target.value)}/>
                    <BtnSubmit type='submit' >Send</BtnSubmit>
                </form>
            </InputBox>
        </div>
    )
}

export default Chat
