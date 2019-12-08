import React, {Component} from 'react';
import Head from './part/Head'
import HomeCarousel from './part/HomeCarousel';
import './css/main.css';
import Footer from "./part/Footer";
import MainCards from "./part/MainCards";

class Main extends Component {
    render() {
        const carouselProps = {
            pictures: [
                {
                    src: "https://mediacdn.befree.ru/media/gene-cms/6/_/6_80.jpg",
                    title: "Посмотреть коллекцию",
                    url: "/newyear",
                    label: "Новогодняя коллекция 2019",
                },
                {
                    src: "https://images.pexels.com/photos/1452783/pexels-photo-1452783.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                    title: "Купить уютный свитер",
                    url: "/woman/sweaters",
                    label: "Пора утепляться!",
                }
            ],
        };
        const cardsProps = {
            pictures: [
                {
                    src: "https://www.super-offerte.com/wp-content/uploads/inverno-scelta-cappotto.jpg",
                    title: "Теплая и уютная зимняя одежда",
                    width: "750",
                    height: "500",
                    url: "",
                    style: "15vw"
                },
                {
                    src: "https://miestilo.ru/upload/iblock/575/5755b150dc9d83e8e80ee6e4ce5589e3.jpg",
                    width: "600",
                    height: "450",
                    url: "",
                    style: "75vw"
                }
            ],
        };

        return (
            <div className="main-component">
                <Head/>
                <HomeCarousel  {...carouselProps}/>
                <MainCards {...cardsProps}/>
                <Footer/>
            </div>
        )
    }
}

export default Main
