import React from 'react';
import { Link } from 'react-router';
import MasterDetail from 'app/components/layout/cont.MasterDetail';
import style from './comp.List.scss';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { id: 1, name: 'Jack', job: 'Worker' },
        { id: 2, name: 'Josh', job: 'Vendor' },
        { id: 3, name: 'John', job: 'Dancer' },
        { id: 4, name: 'Jacky', job: 'Cook' },
        { id: 5, name: 'Jacob', job: 'Driver' },
      ],
    };
  }

  getMasterView() {
    const id = parseInt(this.props.params.id, 10);
    return (<ul className={style.master}>
      {this.state.list.map(item => (
        <li key={item.id} className={item.id === id ? style.active : style.item}>
          <Link to={`/list/${item.id}`}>{item.name}</Link>
        </li>
      ))}
    </ul>);
  }

  getDetailView() {
    const selectedItem = this.getSelectedItem();
    return (<div style={this.state} className={style.detail}>
      {selectedItem.job}
    </div>);
  }

  getSelectedItem() {
    const id = parseInt(this.props.params.id, 10);
    return this.state.list.find(item => item.id === id) || {};
  }

  render() {
    const selectedItem = this.getSelectedItem();
    const masterView = this.getMasterView();
    const detailView = this.getDetailView();
    return (<MasterDetail
      masterViewTitle="List"
      detailViewTitle={selectedItem.name}
      masterView={masterView}
      detailView={detailView} />);
  }
}

List.propTypes = {
  params: React.PropTypes.object,
};
