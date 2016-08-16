import React, { Component } from 'react'
import FeedView from '../components/FeedView'

export default class FeedsView extends Component {
  render() {
    let { fetching, data } = this.props;
    console.log(this.props);
    console.log(data);
    console.log(fetching);
    return (<div>
      {
        fetching ?
        <p>Загрузка...</p>
        :
        data.map((item, i) => {
          return (<FeedView  item={item} key={i}/>);
        }, data)
      }
    </div>);
  }
}
