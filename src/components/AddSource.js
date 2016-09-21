import React, { Component } from 'react'

export default class AddSource extends Component {
  render() {
    return (
        <div>
          <br />
          name:
          <input type='text' defaultValue='habrahabr interesting' id='tName'/>
          <br/>
          url:
          <input type='text' defaultValue='http://habrahabr.ru/rss/interesting/' id='tUrl'/>
          <input type='button' value='Add' onClick={() => {this.props.onClick(document.getElementById('tName').value, document.getElementById('tUrl').value)}}/>
        </div>
    )
  }
}
