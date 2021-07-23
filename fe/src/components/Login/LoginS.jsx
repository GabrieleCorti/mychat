import styled from "styled-components";

const Page = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #a0bfda;
    
`;

const LogIn = styled.div`
    width: 40%;
    margin: auto;
    padding: 50px 20px;
    display: flex;
    flex-direction: column;
    background-color: #f0c58c;
`;

const Title = styled.h1`
    text-align: center;
    margin-bottom: 20px;
`;

const Input = styled.input`
    padding: 8px;
    font-size: 18px;
    margin-bottom: 8px;
    width: 70%;
    margin: auto;
`;

const Label = styled.label`
    margin-bottom: 5px;
    font-size: 16px;
    text-transform: capitalize;
`;

const LogInBtn = styled.button`
width: 20%;
padding: 12px 0;
font-size: 24px;
box-shadow: none;
border: 1px solid #51a5ee;
color: #51a5ee;
font-size: bold;
background-color: transparent;
margin: auto;
cursor: pointer;
transition: all 0.2s ease;
margin-top: 15px;
&:hover {
    color: #f0c58c;
    background-color: #51a5ee;
    transition: all 0.2s ease;
}
`;


export {Page, LogIn, Title, Input, Label, LogInBtn}