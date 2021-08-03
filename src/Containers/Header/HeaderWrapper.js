import styled from "styled-components"

const HeaderWrapper = styled.div`
    transition: all 0.5s ease-in-out;

    &.light {
    background-color: #002F34;
        a {
            color: #fff !important;
        }
    }

    &.dark {
    background-color: #002F34 ;
        a {
            color: #fff !important;
        }
    }
`
export default HeaderWrapper