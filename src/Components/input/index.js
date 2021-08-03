import React from 'react'
import InputWrappper from './inputwrapper'
import { BsSearch } from 'react-icons/bs'
import { HiOutlineLocationMarker } from 'react-icons/hi'
const Input = () => {
    return (

        <InputWrappper>

            <div className="block query">
                <div className="icon-container">
                    <BsSearch />
                </div>
                <div className="input-container">
                    <input type="text" placeholder='753 302 объявлений рядом' />
                </div>
            </div>
            <div className="block locate">
                <div className="icon-container">
                    <HiOutlineLocationMarker />
                </div>
                <p>Весь Узбекистан</p>
            </div>
            <span className="button">
                <p>Поиск</p>
                <div className="icon-container"><BsSearch /></div> 
            </span>

        </InputWrappper>
    )
}

export default Input
