import React from 'react'
import Container from "../../Containers/Container";
import { Link } from "react-router-dom";
import HomeWrapper from "./HomeWrapper";
import categories from "../../Data/categories_links";
import Input from '../../Components/input';
import CategoryWrapper from '../Category/CategoryWrapper';
import homedata from '../../Data/home';
import Button from '../../Components/Button';


const Home = () => {
    return (
        <Container>
            <HomeWrapper className="py-4">
                <div className="container"><Input className='my-5 container' />
                </div>

                <CategoryWrapper >
                    <div className="container py-5">
                        <h1 className="text-center">Главные категории</h1>

                        <div className="links-container">
                            {categories.map(v =>
                                <div className="link">
                                    <Link to={v.to} key={v.to} className="category">
                                        <div className="icon" style={{ backgroundColor: v.backColor }}>
                                            <img src={v.icon} alt="" />
                                        </div>
                                        {v.title}
                                    </Link>
                                </div>
                            )
                            }
                        </div>
                    </div>
                </CategoryWrapper>

                <div className="premium py-5">
                    <div className="container text-center">
                        <h2 className='my-5'>Премиум объявления</h2>

                        <div className="row">
                            {homedata?.map(v =>
                                <div className="col-sm-6 col-md-3">
                                    <div className="product shadow rounded overflow-hidden p-2 my-2 bg-white">
                                        <img src={v.img} className="w-100 mb-4" alt="" />
                                        <p>{v.title}</p> <br />
                                        <span>{v.location}</span>
                                    </div>
                                </div>)
                            }
                        </div>

                        <Button className='my-5'>
                            Посмотреть все
                            <span></span><span></span><span></span><span></span>
                        </Button>
                    </div>
                </div>
                <div className="startbusiness py-4">
                    <div className="line">
                        <div className="stat">
                            <img src="https://static.olx.uz/static/olxuz/packed/font/2fbd23c39bff0aee6c0c84aaf60e66347d.svg" alt="" className='w-100' />
                        </div>
                        <div className="title"><h4>Начните бизнес в интернете с OLX!</h4></div>
                        <div className="line-btn">
                            <Button>Подробнее <span></span><span></span><span></span><span></span></Button>
                        </div>
                    </div>
                </div>

                <div className="olx-about text-center py-5">
                    <div className="img-wrap my-5">
                        <img src="https://static.olx.uz/static/olxuz/packed/font/2f245edf8d709c906bd6c4b03d1623d647.svg" alt="" />
                    </div>
                    <p className='w-50 m-auto text-black'>Cервис объявлений № 1 в Узбекистане
                        Частные объявления Узбекистана на OLX (бывший torg.uz) - здесь вы найдете то, что искали.
                        Нажав на кнопку "Подать объявление", вы сможете разместить онлайн-объявление на любую необходимую тематику - поиск работы, услуги, продажа автомобилей, недвижимости, электроники и многое другое.
                        С помощью сервиса OLX в Узбекистане вы можете найти, продать или купить практически все, что угодно. Воспользовавшись функцией поиска, вы без труда найдете уже опубликованные объявления интересующей вас тематики.
                        OLX в Узбекистане - ваш надежный и незаменимый помощник</p>
                </div>

                <div className="end py-5">
                    <div className="container">
                            <img src="https://static.olx.uz/static/olxuz/packed/font/2fc1ef4e9c6a6dc640b6feb727836fabc7.svg" alt="" />
                            <p> <b> Разделы на сервисе OLX:</b> Детский мир, Недвижимость, Транспорт, Работа, Животные, Дом и сад, Электроника, Бизнес и услуги, Мода и стиль, Хобби, отдых и спорт, Отдам даром, Обмен</p>
                    </div>
                </div>

            </HomeWrapper>
        </Container>
    )
}

export default Home;