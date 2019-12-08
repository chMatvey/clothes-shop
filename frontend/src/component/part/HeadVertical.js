import React, {Component} from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
import './css/headVertical.css';

class HeadVertical extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="head-vertical-component">
                <ul className="head-vertical-categories">
                    <li className="first-element">{this.props.title}</li>
                    {this.props.links.map((links) =>
                        <li>
                            <Link to={"/" + links.link}>{links.name}</Link>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

HeadVertical.propTypes = {
    links: PropTypes.array.isRequired
};

export default HeadVertical;
