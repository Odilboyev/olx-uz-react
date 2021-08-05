import React  from 'react'
import './Container.css'
import Header from '../Header'
import Footer from '../Footer'
import HeaderWrapper from '../Header/HeaderWrapper'
import { useSelector } from 'react-redux'

const Container = (props) => {
    const theme = useSelector(state => state.theme)
    return (
        <div className={`${theme} `}>
            <Header />
            <HeaderWrapper >
                <div className='content mt-5'>
                    {props.children}
                </div>
            </HeaderWrapper>
            <Footer />
        </div>
    )
}

export default Container
