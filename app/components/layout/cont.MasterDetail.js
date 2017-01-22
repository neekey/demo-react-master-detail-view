import React from 'react';
import { connect } from 'react-redux';
import MasterDetail from './comp.MasterDetail';

function MasterDetailContainer(props) {
  const { viewType, masterToDetailLabel, detailToMasterLabel, pathname, ...rest } = props;
  const isMaster = viewType === 'master';
  const mobileLeftLabel = isMaster ? null : detailToMasterLabel;
  const mobileLeftLink = isMaster ? null : `${pathname}?viewType=master`;
  let mobileRightLabel = null;
  let mobileRightLink = null;

  if (isMaster && masterToDetailLabel) {
    mobileRightLabel = masterToDetailLabel;
    mobileRightLink = `${pathname}?viewType=detail`;
  }

  return (<MasterDetail
    {...rest}
    viewTypeOnMobile={viewType}
    mobileRightLink={mobileRightLink}
    mobileRightLabel={mobileRightLabel}
    mobileLeftLink={mobileLeftLink}
    mobileLeftLabel={mobileLeftLabel} />);
}

MasterDetailContainer.propTypes = {
  masterView: React.PropTypes.element,
  detailView: React.PropTypes.element,
  viewType: React.PropTypes.oneOf(['master', 'detail']),
  masterToDetailLabel: React.PropTypes.string,
  detailToMasterLabel: React.PropTypes.string,
  pathname: React.PropTypes.string,
};

MasterDetailContainer.defaultProps = {
  detailToMasterLabel: 'Back',
  viewType: 'detail',
};

function mapStateToProps(state) {
  const viewType = state.routing.locationBeforeTransitions.query.viewType;
  const pathname = state.routing.locationBeforeTransitions.pathname;
  return {
    viewType,
    mobile: state.browser.lessThan.tablet,
    pathname,
  };
}

export default connect(mapStateToProps)(MasterDetailContainer);

