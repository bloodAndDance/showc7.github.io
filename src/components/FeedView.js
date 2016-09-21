import React, { Component } from 'react'

export default class FeedView extends Component {

  createMarkup(content) { return {__html: content}; }

  render() {
    const { item, settings } = this.props;

    return (
      <div>
        <br/>
        {
          (() => {
            return ( settings.ShowTitle ? (<div>{ item.title }</div>) : (''));
          })()
        }
        {
          (() => {
            return (settings.ShowContentSnippet ? (<div>{ item.contentSnippet }</div>):(''));
          })()
        }
        {
          (() => {
            return (settings.ShowLink ? (<div><a href={ item.link }>more</a></div>):(''));
          })()
        }
        {
          (() => {
            return (settings.ShowContent ? (<div dangerouslySetInnerHTML={this.createMarkup(item.content)} />):(''));
          })()
        }
        {
          (() => {
            return (settings.ShowAuthor ? (<div>{ item.author }</div>):(''));
          })()
        }
        {
          (() => {
            return (settings.ShowPublishedDate ? (<div>{ item.publishedDate }</div>):(''));
          })()
        }
      </div>
    );
  }
}
