import styled from "styled-components";

const Button = styled.button`
padding: 10px 30px;
border-radius: 4px;
font-weight: bold;
font-size: 20px;
outline: none;
transition: 0.5s;
border: none;
position: relative;

span{
    position: absolute;
    transition: all 0.5s;
    background-color: #222222;
}
span:first-child{
    top:0;
    left: 0;
    width: 0;
    height: 2px;
}
span:nth-child(2){
    top:0;
    right: 0;
    width: 2px;
    height: 0;
}
span:nth-child(3){
    bottom:0;
    right: 0;
    width: 0;
    height: 2px;
}
span:last-child{
    bottom:0;
    left: 0;
    width: 2px;
    height: 0;
}

&:hover  span:nth-child(odd){
    width: 100%;
}
&:hover  span:nth-child(even){
    height: 100%;
}
`
export default Button