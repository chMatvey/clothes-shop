import React, {Component} from 'react';
import {Link} from 'react-router';
import './css/footer.css';
import {SocialIcon} from 'react-social-icons';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <ul className="foot-menu">
                    <li>
                        <ul>
                            <h4>Покупателю</h4>
                            <li><Link to="/delivery">Доставка</Link></li>
                            <li><Link to="/payment">Оплата</Link></li>
                            <li><Link to="/refund">Обмен и возврат</Link></li>
                            <li><Link to="/privacy-policy">Политика конфиденциальности</Link></li>
                            <li><Link to="/card">Бонусная карта</Link></li>
                            <li><Link to="/faq">FAQ</Link></li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <h4>О компании</h4>
                            <li><Link to="/stores">Адреса магазинов</Link></li>
                            <li><Link to="/franchise">Франчайзинг</Link></li>
                            <li><Link to="/for_partners">Партнёрам</Link></li>
                            <li><Link to="/contacts">Контакты</Link></li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <h4>Работа</h4>
                            <li><Link to="/">Вакансии в магазинах</Link></li>
                            <li><Link to="/">Вакансии в офисе</Link></li>

                        </ul>
                    </li>
                </ul>
                <hr/>
                <div className="social">
                    <span className="icons">
                    <SocialIcon url="http://vk.com" network="vk" color="white"/>
                    <SocialIcon url="http://instagram.com" network="instagram" color="white"/>
                    <SocialIcon url="http://facebook.com" network="facebook" color="white"/>
                    <SocialIcon url="http://twitter.com" network="twitter" color="white"/>
                    <SocialIcon url="http://google.com" network="google" color="white"/>
                    <p/>
                    </span>
                </div>
            </div>
        )
    }
}

export default Footer;
