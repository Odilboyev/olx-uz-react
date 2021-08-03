import styled from "styled-components"

const HeaderWrapper = styled.div`
    transition: all 0.5s ease-in-out;
    &.light {
    background-color: #002F34;
        a,p {
            color: #fff !important;
            margin: 0;
        }
    }
    &.dark {
    background-color: #002F34 ;
        a, p {
            color: #fff !important;
            margin: 0;
        }
    }
    @media (max-width: 865px){
        p{
            display: none;
        }
    }
`
export default HeaderWrapper