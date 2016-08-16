import React, { Component } from 'react'

export default class FeedView extends Component {

  createMarkup(content) { return {__html: content}; }

  render() {
    const { item } = this.props;

    let isShowTitle = true;
    let isShowContentSnippet = true;
    let isShowLink = true;
    let isShowContent = false;
    let isShowAuthor = false;
    let isShowPublishedDate = false;

    return (
      <div>
        <br/>
        {
          (() => {
            return ( isShowTitle ? (<div>{ item.title }</div>) : (''));
          })()
        }
        {
          (() => {
            return (isShowContentSnippet ? (<div>{ item.contentSnippet }</div>):(''));
          })()
        }
        {
          (() => {
            return (isShowLink ? (<div><a href={ item.link }>more</a></div>):(''));
          })()
        }
        {
          (() => {
            return (isShowContent ? (<div dangerouslySetInnerHTML={this.createMarkup(item.content)} />):(''));
          })()
        }
        {
          (() => {
            return (isShowAuthor ? (<div>{ item.author }</div>):(''));
          })()
        }
        {
          (() => {
            return (isShowPublishedDate ? (<div>{ item.publishedDate }</div>):(''));
          })()
        }
      </div>
    );
  }
}
