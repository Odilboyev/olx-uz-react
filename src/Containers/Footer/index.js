import "./Footer.css"
import React from 'react'
import { Link } from "react-router-dom"

let menu = [
    { to: "/mobileapps", title: "Мобильные приложения" },
    { to: "/help", title: "Помощь" },
    { to: "/features", title: "Платные услуги" },
    { to: "/", title: "Платные услуги" },
    { to: "/", title: "Бизнес на OLX" },
    { to: "/", title: "Реклама на сайте" },
    { to: "/", title: "Условия использования" },
    { to: "/", title: "Политика конфиденциальности" },
]

let menu2 = [
    { to: "/mobileapps", title: "Как продавать и покупать?" },
    { to: "/help", title: "Правила безопасности" },
    { to: "/features", title: "Карта сайта" },
    { to: "/", title: "Карта регионов" },
    { to: "/", title: "Карьера в OLX" },
    { to: "/", title: "Обратная связь" },
]

const Footer = () => {
    return (
        <footer className="text-white border-top">
            <div className="container py-5">
                <div class="row">
                    <div className="col-md-4"><div>
                        {menu.map(value =>
                            <Link to={value.to} key={value.to}>{value.title}</Link>)}
                    </div></div>
                    <div className="col-md-4">
                    {menu2.map(value =>
                            <Link to={value.to} key={value.to}>{value.title}</Link>)}
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex">
                            <div className="download w-50">
                                <img src="https://static.olx.uz/static/olxuz/packed/font/2fc9f37e6707acfc0e1255cec57c49a986.svg" alt="" className="img-fluid"/>
                            </div>
                            <div className="download w-50">
                                <img src="https://static.olx.uz/static/olxuz/packed/font/2fccd2faa9395d5faed1011516c64dc929.svg" alt="" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;