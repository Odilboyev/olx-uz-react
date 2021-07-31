import './Header.css';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import ThemeContext from "./../../theme-context";
import { Button } from 'reactstrap';
import styled from 'styled-components';

let menu = [
    { to: "/", title: "Home" },
    { to: "/mobileapps", title: "Мобильные приложения" },
    { to: "/category", title: "Category" },
]

const HeaderWrapper = styled.header`
    transition: cubic-bezier(0.165, 0.84, 0.44, 1);

    &.light {
    background-color: rgb(236, 234, 255);
        a {
            color: rgb(23, 16, 65) !important;
        }
    }

    &.dark {
    background-color: rgb(23, 16, 65);
        a {
            color: rgb(236, 234, 255) !important;
        }
    }
`

const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    console.log(theme, toggleTheme);

    return (
        <HeaderWrapper className={`shadow mb-3 ${theme}`}>
            <div className="container py-3 d-flex justify-content-between align-items-center">
                <div>
                    {menu.map((item, value) => <Link to={item.to} key={item.to} className="me-3 btn">{item.title}</Link>)}
                </div>
                <Button onClick={toggleTheme} color={theme}>{theme == "dark" ? "Day" : "Night"}</Button>
            </div>
        </HeaderWrapper>
    )
}

export default Header