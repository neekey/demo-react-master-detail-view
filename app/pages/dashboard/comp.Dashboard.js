import React from 'react';
import MasterDetail from 'app/components/layout/comp.MasterDetail';

export default function Dashboard() {
  const masterView = <div>Master</div>;
  const detailView = <div>Detail</div>;
  
  return (<MasterDetail 
    mobileHeaderTile="Dashboard"
    masterView={masterView}
    detailView={detailView}
  />);
}
