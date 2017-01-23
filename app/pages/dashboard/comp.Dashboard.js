import React from 'react';
import MasterDetail from 'app/components/layout/cont.MasterDetail';
import style from './comp.Dashboard.scss';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'yellow',
      background: 'grey',
      fontSize: 20,
    };
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleBackgroundChange = this.handleBackgroundChange.bind(this);
    this.handleFontSizeChange = this.handleFontSizeChange.bind(this);
  }

  getMasterView() {
    return (<div className={style.master}>
      <div>
        <label>Font Color <input
          value={this.state.color}
          onChange={this.handleColorChange} /></label>
      </div>
      <div>
        <label>Background <input
          value={this.state.background}
          onChange={this.handleBackgroundChange} /></label>
      </div>
      <div>
        <label>Font Size <input
          type="number"
          value={this.state.fontSize}
          onChange={this.handleFontSizeChange} /></label>
      </div>
    </div>);
  }

  getDetailView() {
    return (<div style={this.state} className={style.detail}>
      Detail View
    </div>);
  }

  handleColorChange(event) {
    this.setState({
      color: event.target.value,
    });
  }

  handleBackgroundChange(event) {
    this.setState({
      background: event.target.value,
    });
  }

  handleFontSizeChange(event) {
    this.setState({
      fontSize: event.target.value,
    });
  }

  render() {
    const masterView = this.getMasterView();
    const detailView = this.getDetailView();

    return (<MasterDetail
      masterToDetailLabel="Done"
      mobileHeaderTile="Dashboard"
      detailViewTitle="View"
      masterView={masterView}
      detailView={detailView} />);
  }
}
