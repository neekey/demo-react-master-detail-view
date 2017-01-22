import React from 'react';
import MobileHeader from 'app/components/mobileHeader/comp.MobileHeader';

export default function MasterDetail(props) {
    const { 
        mobile, 
        viewTypeOnMobile, 
        masterView, 
        detailView,
        mobileHeaderTile,
        mobileHeaderLeftLink,
        mobileHeaderRightLink,
    } = props;
    const showMaster = !mobile || (mobile && viewTypeOnMobile === 'master');
    const showDetail = !mobile || (mobile && viewTypeOnMobile === 'detail');
    return (<div>
        <MobileHeader
            mobileHeaderTile={mobileHeaderTile}
            mobileHeaderLeftLink={mobileHeaderLeftLink}
            mobileHeaderRightLink={mobileHeaderRightLink} />
        <div>
            {showMaster ? <div>{masterView}</div> : null}
            {showDetail ? <div>{detailView}</div> : null}
        </div>
    </div>)
}

MasterDetail.propTypes = {
    mobileHeaderTile: React.PropTypes.string,
    mobileHeaderLeftLink: React.PropTypes.string,
    mobileHeaderRightLink: React.PropTypes.string,
    masterView: React.PropTypes.any,
    detailView: React.PropTypes.any,
    mobile: React.PropTypes.bool,
    viewTypeOnMobile: React.PropTypes.oneOf(['master', 'detail']),
};

