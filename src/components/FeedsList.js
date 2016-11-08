import React, { Component } from 'react'
import FeedSource from '../components/FeedSource'

export default class FeedsList extends Component {
  handleClick(url, index) {
    console.log('click handled \'FeedSource\' index: ' + url);
    console.log(this.props);
    this.props.history.push('/source/'+index);
    // call reducer
    //this.props.getNews(url);
  }

  render() {
    const { sources, getNow, initLoading } = this.props;

    if(getNow >= 0 && !initLoading) {
      //this.props.getNews(sources[getNow].url);
    }

    return (<div>
      {
        sources.map((item, i) => {
          /*{console.log(sources[i]);}*/
          var boundClick = this.handleClick.bind(this, sources[i].url, i);
          return(
            <FeedSource onChange={boundClick} source={sources[i].name} id={i} url={sources[i].url} key={i}/>
          );
        }, sources)
      }
    </div>);
  }
}
