import React from 'react'
import {ChatBox, InputBox, TextBox, BtnSubmit} from './ChatS';
import {useState, useEffect, useRef } from 'react';
import openSocket from 'socket.io-client';
import io from 'socket.io-client';

const Chat = () => {
    
    /* const socket =  openSocket('http://localhost:5000', { transports: ["websocket"] }); */
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    //per mantenere la connessione
    
    const refSockets = useRef();

    refSockets.current = io('http://localhost:5000');

       
    useEffect(()=>{   
        refSockets.current.on('chat message', (msg)=>{
            ReciveMessage(msg);
         })
    }, [messages]);

    //funzione che non serve perchè l'arrivo del msg scatena il setMsg
    const ReciveMessage = (msg) => {
        setMessages(oldMsg => [...oldMsg, msg ]);
    }

    const Send = (e) => {
        
        e.preventDefault();
        console.log(e.target[0].value);
        const messageInfo = {
            body: e.target[0].value
        }
        e.target[0].value = '';
        refSockets.current.emit('chat message', messageInfo);
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
                    <TextBox type="text" id='text' name='text'  />
                    <BtnSubmit type='submit' >Send</BtnSubmit>
                </form>
            </InputBox>
        </div>
    )
}

export default Chat
