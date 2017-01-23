import React from 'react';
import { connect } from 'react-redux';
import MasterDetail from './comp.MasterDetail';

function MasterDetailContainer(props) {
  const {
    viewTypeOnMobile,
    masterToDetailLabel,
    detailToMasterLabel,
    pathname,
    detailViewTitle,
    masterViewTitle,
    ...rest,
  } = props;
  const isMaster = viewTypeOnMobile === 'master';
  const mobileLeftLabel = isMaster ? null : detailToMasterLabel;
  const mobileLeftLink = isMaster ? null : `${pathname}?viewTypeOnMobile=master`;
  const mobileHeaderTile = isMaster ? masterViewTitle : detailViewTitle;
  let mobileRightLabel = null;
  let mobileRightLink = null;

  if (isMaster && masterToDetailLabel) {
    mobileRightLabel = masterToDetailLabel;
    mobileRightLink = `${pathname}?viewTypeOnMobile=detail`;
  }

  return (<MasterDetail
    {...rest}
    mobileHeaderTile={mobileHeaderTile}
    viewTypeOnMobile={viewTypeOnMobile}
    mobileRightLink={mobileRightLink}
    mobileRightLabel={mobileRightLabel}
    mobileLeftLink={mobileLeftLink}
    mobileLeftLabel={mobileLeftLabel} />);
}

MasterDetailContainer.propTypes = {
  masterView: React.PropTypes.element,
  detailView: React.PropTypes.element,
  masterViewTitle: React.PropTypes.string,
  detailViewTitle: React.PropTypes.string,
  viewTypeOnMobile: React.PropTypes.oneOf(['master', 'detail']),
  masterToDetailLabel: React.PropTypes.string,
  detailToMasterLabel: React.PropTypes.string,
  pathname: React.PropTypes.string,
};

MasterDetailContainer.defaultProps = {
  detailToMasterLabel: 'Back',
  viewTypeOnMobile: 'detail',
};

function mapStateToProps(state) {
  const viewTypeOnMobile = state.routing.locationBeforeTransitions.query.viewTypeOnMobile;
  const pathname = state.routing.locationBeforeTransitions.pathname;
  return {
    viewTypeOnMobile,
    mobile: state.browser.lessThan.tablet,
    pathname,
  };
}

export default connect(mapStateToProps)(MasterDetailContainer);

