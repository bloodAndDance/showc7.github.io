import React, { Component } from 'react'

export default class ShowFeedsFromSourceCount extends Component {
  render() {
    const { currentValue } = this.props;
    return <div>
      <input type='number' defaultValue={currentValue} onChange={(event) => {console.log('ok'); this.props.onChange(event.target.value)}}/>
    </div>
  }
}
