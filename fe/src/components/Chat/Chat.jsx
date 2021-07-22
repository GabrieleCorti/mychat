import React from 'react'
import {ChatBox, InputBox, TextBox, BtnSubmit} from './ChatS';

const Chat = () => {
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
