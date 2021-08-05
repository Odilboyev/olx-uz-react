import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import HeaderWrapper from './HeaderWrapper';
import { FaRegHeart, FaRegUser } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../../Redux/actions';


const Header = () => {
    const theme = useSelector(state => state.theme)
    console.log(theme)
    
    const dispatch = useDispatch()
    const toggle = () => dispatch(toggleTheme())

    return (
        <HeaderWrapper className={`shadow mb-3 ${theme} fixed-top`}>
            <div className="container py-3 d-flex justify-content-between align-items-center ">

                <Link to='/' >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/OLX_New_Logo.png/200px-OLX_New_Logo.png" className="w-25 mr-auto" />
                </Link>

                <div className="ml-auto d-flex justify-content-evenly align-items-center w-50">
                    <p >
                        O'z | Py
                    </p>
                    <p className='m-0'><FaRegHeart /></p>
                    <p ><FaRegUser /> Мой профиль</p>
                    <Button onClick={toggle} color={theme === "dark" ? "light" : "dark"}>{theme === "dark" ? "Day" : "Night"}</Button>

                </div>

            </div>
        </HeaderWrapper>
    )
}

export default Header