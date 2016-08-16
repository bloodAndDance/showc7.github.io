import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Settings extends Component {
  render() {
    return <div>
      <p>Settings page!</p>
      <Link to='/'>home</Link>
    </div>
  }
}
