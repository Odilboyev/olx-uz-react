import styled from "styled-components";

const InputWrappper = styled.div`
width: 100%;
display: flex;
background-color: #fff ;
margin: 50px 0;
*{
    margin: 0;
}
input, .input-container {
    width: 100%;
    margin: 0 !important;
    border: none;
    outline: none;
}
.block{
    width: 43%;
    padding: 15px;
    display: flex;
    align-items: center;
   
}
.icon-container{
    padding: 15px;
    svg{
        font-size: 24px;
    }
}
.button{
    width: 14%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
    cursor: pointer;
    &:hover{
        background-color: #002F34;
        p, svg{
            color: #fff !important;
        }
    }
}
`
export default InputWrappper;