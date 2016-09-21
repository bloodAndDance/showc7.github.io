import React, { Component } from 'react'

export default class CheckBox extends Component {
  render() {
    const {isChecked} = this.props;
    return <div>
      <input type='checkbox' defaultChecked={isChecked} onClick={this.props.onClick}/>
    </div>
  }
}
