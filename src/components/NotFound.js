import React, { Component } from 'react'
import { Link } from 'react-router'

export default class NotFound extends Component {
  render() {
    return <div>
      <p>Sorry. The requested page was not found</p>
      <Link to='/'>home</Link>
    </div>
  }
}
