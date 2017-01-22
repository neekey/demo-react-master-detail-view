import React from 'react';
import { Link } from 'react-router';
import style from './comp.MobileHeader.scss';

export default function MobileHeader(props) {
  return (<div className={style.container}>
    <span className={style.left}>
    {props.leftLabel ? (<Link to={props.leftLink}>{props.leftLabel}</Link>) : null}
    </span>
    <span className={style.middle}>{props.title ? props.title : null}</span>
    <span className={style.right}>
    {props.rightLabel ? (<Link to={props.rightLink}>{props.rightLabel}</Link>) : null}
    </span>
  </div>);
}

MobileHeader.propTypes = {
  leftLink: React.PropTypes.string,
  leftLabel: React.PropTypes.string,
  rightLink: React.PropTypes.string,
  rightLabel: React.PropTypes.string,
  title: React.PropTypes.string,
};
