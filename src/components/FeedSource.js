import React, { Component } from 'react'
import { Link } from 'react-router'

export default class FeedSource extends Component {
  render() {
    const { source, id/*, url*/ } = this.props;
    //return <div onClick={this.props.onClick}>
    //  source: {source} | id:{id} {/* | {url}*/}
    //</div>

    //return <div>
    //  <Link to={'/source/' + id}>source: {source} | id:{id} {/* | {url}*/}</Link>
    //</div>


    return (
      <div>
        <Link to={'/source/' + id}>{source}</Link>
      </div>
    )
  }
}
