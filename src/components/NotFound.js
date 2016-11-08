import React, { Component } from 'react'
import { Link } from 'react-router'

export default class NotFound extends Component {
  render() {
    return <div>
      <Link to='/'>home</Link>
      <p>Sorry. The requested page was not found</p>
    </div>
  }
}
