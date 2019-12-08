import React, {Component} from 'react';
import Head from './part/Head';
import {Link} from 'react-router';
import ListOfClothes from './part/ListOfClothes';
import Footer from "./part/Footer";

class Woman extends Component{
    render(){
        return(
            <div>
                <Head/>
                <ListOfClothes/>
                <Footer/>
            </div>
        )
    }
}
export default Woman;
