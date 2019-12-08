import React, {Component} from 'react';
import Head from './part/Head';
import "./css/lookbook.css";
import {Link} from 'react-router';
import LookbookCard from "./part/LookbookCard";

class Lookbook extends Component{
    render(){
        return(
            <div className="lookbook-component">
                <Head/>
                <LookbookCard/>
                </div>
        )
    }
}

export default Lookbook;
