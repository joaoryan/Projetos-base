import styled,{ createGlobalStyle } from 'styled-components';
import * as color from '../config/color';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
}
body{
font-family: sans-serif;
background: ${color.primaryDarkColor};
color: ${color.primaryDarkColor};
}

html, border, #root {
    height: 100%;
}

button{
    cursor: pointer;
    background: ${color.primaryColor};
    border: none;
    color: #fff;
    padding:10px 20px ;
    border-radius: 4px;
    font-weight: 700;
}
a{
    text-decoration: none;
    color: ${color.primaryColor};
}
ul{
    list-style: none;
}

body .Toastify .Toastify_toast-container .Toastify_toast--success {
background: ${color.successColor}
}
body .Toastify .Toastify_toast-container .Toastify_toast--error {
background: ${color.errorColor}
}

`;

export const Container = styled.section`
max-width: 360px;
background: #fff;
margin: 30px auto;
padding: 30px;
border-radius: 5px;
box-shadow: 0 0 10px rgba(0,0,0,0.1);

`;
