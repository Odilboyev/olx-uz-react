import React, { useContext } from 'react'
import './Container.css'
import Header from '../Header'
import Footer from '../Footer'
import HeaderWrapper from '../Header/HeaderWrapper'
import ThemeContext from "./../../theme-context";

const Container = (props) => {
    const {theme} = useContext(ThemeContext)
    return (
        <div className={theme}>
            <Header />
            <HeaderWrapper >
                <div className='content'>
                    {props.children}
                </div>
            </HeaderWrapper>
            <Footer />
        </div>
    )
}

export default Container
