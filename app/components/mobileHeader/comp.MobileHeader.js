import React from 'react';
import { Link } from 'react-router-redux';

export default function MobileHeader(props) {
    return (<div>
        <span><Link to={props.leftLink} /></span>
        <span>{props.title}</span>
        <span><Link to={props.rightLink} /></span>
    </div>);
}

MobileHeader.propTypes = {
    leftLink: React.PropTypes.string,
    rightLink: React.PropTypes.string,
    title: React.PropTypes.string,
};