import React from 'react'
import './Container.css'
import Header from '../Header'
import Footer from '../Footer'

const Container = (props) => {
    return (
        <>
            <Header/>
            <div className="content">
                {props.children}
            </div>
            <Footer/>
        </>
    )
}

export default Container
