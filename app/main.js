import React from 'react';
import './index.scss';

export default function Main(props) {
  return (<div>
    <div className="content">
      {props.children}
    </div>
  </div>);
}

Main.propTypes = {
  children: React.PropTypes.any,
};
