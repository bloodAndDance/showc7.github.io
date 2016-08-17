import React, { Component } from 'react'

export default class FeedSourceInfo extends Component {
  render() {
    const { source, id, url } = this.props;
    return <div>
      {source}
      <br/>
      {url}
      <br />
      <input type='button' value='delete' onClick={() => {this.props.onClick(id)}}/>
    </div>
  }
}
