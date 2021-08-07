import React, { useContext } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import Container from '../../Containers/Container'
import './category.css'
import datas from "../../Data";
import CategoryWrapper from './CategoryWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLike } from '../../Redux/actions';
import {AiOutlineHeart} from 'react-icons/ai'
import {AiFillHeart} from 'react-icons/ai'
const Category = () => {
    const { category } = useParams();
    const data = useSelector(state => state.data[category]);
    const dispatch = useDispatch();
    const toggle = i => {
        let newData = [...data];
        newData[i].like = !newData[i].like

        // dispatch)toggleLike({ [category] })
       
        dispatch(toggleLike({ [category]: newData }))
      
    }
 

    const theme = useSelector(state => state.theme)

    return (

        <Container>
            {!data && <Redirect to='/'/>}
            <CategoryWrapper className={theme}>
                <div className="container my-5 py-5">
                    <h1>Category: {category}</h1>
                    <div className="row">
                        {data?.map((v, i) =>
                            <div className="col-sm-6 col-md-3">
                                <div className="product shadow rounded overflow-hidden p-2">
                                    <img src={v.img} className="w-100 mb-4" alt="" />
                                    <p>{v.title}</p>
                                    <p className="d-flex justify-content-between w-100">
                                        <span>{v.price}</span>
                                        <span className="text-danger" onClick={() => toggle(i)}>
                                           { v.like ? < AiFillHeart/> : < AiOutlineHeart/>} 
                                        </span>
                                    </p>

                                    <span>{v.location}</span>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </CategoryWrapper>
        </Container>

    )
}

export default Category;