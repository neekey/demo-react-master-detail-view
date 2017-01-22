import React from 'react';
import MobileHeader from 'app/components/mobileHeader/comp.MobileHeader';
import style from './comp.MasterDetail.scss';

export default function MasterDetail(props) {
  const {
    mobile,
    viewTypeOnMobile,
    masterView,
    detailView,
    mobileHeaderTile,
    mobileRightLabel,
    mobileRightLink,
    mobileLeftLabel,
    mobileLeftLink,
  } = props;
  const showMaster = !mobile || (mobile && viewTypeOnMobile === 'master');
  const showDetail = !mobile || (mobile && viewTypeOnMobile === 'detail');
  return (<div className={style.container}>
    {mobile ? <MobileHeader
      title={mobileHeaderTile}
      leftLink={mobileLeftLink}
      leftLabel={mobileLeftLabel}
      rightLink={mobileRightLink}
      rightLabel={mobileRightLabel} /> : null}
    <div className={style.content}>
      {showMaster ? <div className={style.master}>{masterView}</div> : null}
      {showDetail ? <div className={style.detail}>{detailView}</div> : null}
    </div>
  </div>);
}

MasterDetail.propTypes = {
  mobileHeaderTile: React.PropTypes.string,
  mobileRightLink: React.PropTypes.string,
  mobileRightLabel: React.PropTypes.string,
  mobileLeftLink: React.PropTypes.string,
  mobileLeftLabel: React.PropTypes.string,
  masterView: React.PropTypes.any,
  detailView: React.PropTypes.any,
  mobile: React.PropTypes.bool,
  viewTypeOnMobile: React.PropTypes.oneOf(['master', 'detail']),
};

MasterDetail.defaultProps = {
  mobileLeftLabel: 'Back',
};

