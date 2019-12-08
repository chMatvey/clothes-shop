import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';
import './css/homeCarousel.css'
import {Link} from 'react-router';
import PropTypes from 'prop-types';

class HomeCarousel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="home-carousel-component">
                <Carousel>
                    {this.props.pictures.map((picture) =>
                        <Carousel.Item>
                            <Link to={picture.url}><img id="image-carousel" src={picture.src}/></Link>
                            <Carousel.Caption>
                                <div>
                                    <h2><Link to={picture.url}>{picture.title}</Link></h2>
                                    <h4>{picture.label}</h4>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )}
                </Carousel>
            </div>
        )
    }
}

HomeCarousel.propTypes = {
    pictures: PropTypes.array.isRequired
};

export default HomeCarousel;
