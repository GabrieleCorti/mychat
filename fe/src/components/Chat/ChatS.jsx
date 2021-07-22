import styled from 'styled-components';

const ChatBox = styled.div`
    width: 100%;
    height: calc(100vh - 80px);
`;

const InputBox = styled.div`
    background-color: #83c3e0;
    padding: 20px 60px;
    height: 80px;
`;

const TextBox = styled.input`
    width: 90%;
    padding: 10px;
    border-radius: 20px;
`;

const BtnSubmit = styled.button`
    padding: 10px 15px;
    font-size: 20px;
    background-color: #45497c;
    color: white;
    margin-left: 40px;
    border: 1px solid white;
`;

export {ChatBox, InputBox, TextBox, BtnSubmit};