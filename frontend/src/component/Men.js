import React, {Component} from 'react';
import Head from './part/Head';
import "./css/men.css";
import {Link} from 'react-router';
import HeadVertical from './part/HeadVertical';
import NewClothes from './part/NewClothes'

class Men extends Component{
    render(){
        const menClothes = {
            title: "Одежда",
            links: [
                {
                    link: "men/outerwear",
                    name: "Верхняя одежда"
                },
                {
                    link: "men/shirt",
                    name: "Рубашки"
                },
                {
                    link: "men/t-shirt",
                    name: "Футболки"
                },
                {
                    link: "men/suits",
                    name: "Костюмы"
                },
                {
                    link: "men/sweaters",
                    name: "Джемперы и свитеры"
                },
                {
                    link: "men/trousers",
                    name: "Брюки"
                },
            ],
        };
        const menShoes={
            title: "Обувь",
            links: [
                {
                    link: "men/outerwear",
                    name: "Верхняя одежда"
                },
                {
                    link: "men/shirt",
                    name: "Рубашки"
                },
            ]
        };

        return(
            <div className="men-page">
                <Head/>
                <div className="men-component">
                    <div className="suit-hyde"><Link to="/"><img src="https://images.pexels.com/photos/843277/pexels-photo-843277.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"/> </Link></div>
                <div className="men-content">
                    <HeadVertical {...menClothes}/>
                    <HeadVertical {...menShoes}/>
                </div>
                <HeadVertical {...menClothes}/>
                </div>
            </div>
        )
    }
}

export default Men;
