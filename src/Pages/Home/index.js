import React from 'react'
import Container from "../../Containers/Container";
import { Link } from "react-router-dom";
import HomeWrapper from "./HomeWrapper";
import categories from "../../Data/categories_links";


const Home = () => {
    return (
        <Container>
            <HomeWrapper className="container py-4">
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

            </HomeWrapper>
        </Container>
    )
}

export default Home;