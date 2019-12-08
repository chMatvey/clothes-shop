import React, {Component} from 'react';
import {Link} from 'react-router';
import './css/head.css';

let count = 0;

class Head extends Component {
    render() {
        window.onresize =
            function reSize() {
                if (document.body.clientWidth >= 1000) {
                    document.getElementsByClassName("elements-of-menu")[0].style.display = "flex";
                } else {
                    if (count % 2 === 1) document.getElementsByClassName("elements-of-menu")[0].style.display = "inline";
                    else document.getElementsByClassName("elements-of-menu")[0].style.display = "none";
                }

            };

        window.onscroll =
            function ScrollPage() {
                const docScroll = window.pageYOffset;

                if (document.body.clientWidth >= 1000) {
                    if (docScroll > 40) {
                        document.getElementsByClassName("elements-of-menu")[0].style.position = "fixed";
                        document.getElementsByClassName("elements-of-menu")[0].style.top = "0px";
                    } else document.getElementsByClassName("elements-of-menu")[0].style.position = "relative";
                }
            };

        function adaptMenu() {
            count++;
            if (document.body.clientWidth < 1000) {
                document.getElementsByClassName("elements-of-menu")[0].style.display = "none";

                if (count % 2 === 1) document.getElementsByClassName("elements-of-menu")[0].style.display = "inline";

                else document.getElementsByClassName("elements-of-menu")[0].style.display = "none";

            }
        }

        return (
            <div className="header">
                <div className="top-line">
                    <div className="title">
                        <h4><Link to="/">Online shop</Link></h4>
                    </div>
                    <div className="burger">
                        <span><Link onClick={adaptMenu} className="glyphicon glyphicon-menu-hamburger"
                                    aria-hidden="true"/>
                    </span>
                    </div>
                </div>
                <div className="main-menu">
                    <div className="elements-of-menu">
                        <ul className="link-menu">
                            <li>
                                <Link to="/woman">Женское</Link>
                                <ul className="drop-down">
                                    <li id="drop-menu">
                                        <h1>Одежда</h1>
                                        <ul>
                                            <li><Link to="/woman/outerwear">Верхняя одежда</Link></li>
                                            <li><Link to="/woman/dresses">Платья</Link></li>
                                            <li><Link to="/woman/blouses">Блузки и рубашки</Link></li>
                                            <li><Link to="/woman/t-shirt">Футболки и топы</Link></li>
                                            <li><Link to="/woman/sweaters">Джемперы и свитеры</Link></li>
                                            <li><Link to="/woman/trousers">Брюки</Link></li>
                                            <li><Link to="/woman/jackets">Пиджаки и кардиганы</Link></li>
                                            <li><Link to="/woman/skirts">Юбки</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h1>Обувь</h1>
                                        <ul>
                                            <li><Link to="/woman/high-heels-shoes">Туфли</Link></li>
                                            <li><Link to="/woman/trainers">Кроссовки</Link></li>
                                            <li><Link to="/woman/shoes">Ботинки</Link></li>
                                            <li><Link to="/woman/boots">Сапоги</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h1>Другое</h1>
                                        <ul>
                                            <li><Link to="/woman/new">Новая коллекция</Link></li>
                                            <li><Link to="/woman/special">Специальные предложения</Link></li>

                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/men">Мужское</Link>
                                <ul className="drop-down">
                                    <li id="drop-menu">
                                        <h1>Одежда</h1>
                                        <ul>
                                            <li><Link to="/men/outerwear">Верхняя одежда</Link></li>
                                            <li><Link to="/men/shirt">Рубашки</Link></li>
                                            <li><Link to="/men/t-shirt">Футболки</Link></li>
                                            <li><Link to="/men/suits">Костюмы</Link></li>
                                            <li><Link to="/men/sweaters">Джемперы и свитеры</Link></li>
                                            <li><Link to="/men/trousers">Брюки</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h1>Обувь</h1>
                                        <ul>
                                            <li><Link to="/men/trainers">Кроссовки</Link></li>
                                            <li><Link to="/men/gumshoes">Кеды</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h1>Другое</h1>
                                        <ul>
                                            <li><Link to="/men/new">Новая коллекция</Link></li>
                                            <li><Link to="/men/special">Специальные предложения</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/kids">Детское</Link>
                                <ul className="drop-down">
                                    <li id="drop-menu">
                                        <h1>Категория</h1>
                                        <ul>
                                            <li><Link to="/kids/from-1month">Малыши 1 мес - 2 года</Link></li>
                                            <li><Link to="/kids/girls-from-2years">Девочки 2 - 5 лет</Link></li>
                                            <li><Link to="/kids/boys-from-2years">Мальчики 2 - 5 лет</Link></li>
                                            <li><Link to="/kids/girls-from-5years">Девочки 5 - 10 лет</Link></li>
                                            <li><Link to="/kids/boys-from-5years">Мальчики 5 - 10 лет</Link></li>
                                            <li><Link to="/kids/girls-from-10years">Девочки 10 - 14 лет</Link></li>
                                            <li><Link to="/kids/boys-from-10years">Мальчики 10 - 14 лет</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h1>Другое</h1>
                                        <ul>
                                            <li><Link to="/kids/special">Специальные предложения</Link></li>
                                            <li><Link to="/kids/accessories">Детские аксессуары</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/accessories">Аксессуары</Link>
                                <ul className="drop-down">
                                    <li>
                                        <h1>Женские</h1>
                                        <ul>
                                            <li><Link to="/accessories/bags">Сумки</Link></li>
                                            <li><Link to="/accessories/woman-hats-and-scarves">Шапки и шарфы</Link></li>
                                            <li><Link to="/accessories/jewellery">Бижутерия</Link></li>
                                            <li><Link to="/accessories/woman-gloves">Перчатки</Link></li>
                                            <li><Link to="/accessories/for-phone">Для телефона</Link></li>
                                            <li><Link to="/accessories/for-hair">Для волос</Link></li>
                                            <li><Link to="/accessories/woman-glasses">Очки</Link></li>
                                            <li><Link to="/accessories/socks">Носки и колготки</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h1>Мужские</h1>
                                        <ul>
                                            <li><Link to="/accessories/men-hats-and-scarves">Шапки и шарфы</Link></li>
                                            <li><Link to="/accessories/men-glasses">Очки</Link></li>
                                            <li><Link to="/accessories/backpack">Рюкзаки</Link></li>
                                            <li><Link to="/accessories/belt">Ремни</Link></li>
                                            <li><Link to="/accessories/men-gloves">Перчатки и варежки</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/lookbook">Lookbook</Link>
                            </li>
                        </ul>

                        <ul className="right-menu">
                            <li>
                                <Link className="glyphicon glyphicon-user" aria-hidden="true" to="/"/>
                            </li>
                            <li>
                                <Link className="glyphicon glyphicon-shopping-cart" aria-hidden="true" to="/"/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}


export default Head;
