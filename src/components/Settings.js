import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as settingsActions from '../actions/SettingsActions';
import * as feedsListActions from '../actions/FeedsListActions';
import CheckBox from './CheckBox';
import FeedSourceInfo from './FeedSourceInfo';
import AddSource from './AddSource';
import ShowFeedsFromSourceCount from './ShowFeedsFromSourceCount';

export default class Settings extends Component {

  checkboxOnChange(key, value) {
    console.log('checkbox state changed' + value);
    const { changeSettings } = this.props.settingsActions;
    changeSettings({[key] : !value});
  }

  addSourceClick(name, url) {
    console.log('addSourceClick');
    console.log(name + ' | ' + url);
    const { addSource } = this.props.feedsListActions;
    addSource(url, name);
  }

  feedSourceInfoOnClick(id) {
    console.log('delete ' + id);
    const { removeSource } = this.props.feedsListActions;
    removeSource(id);
  }

  showFeedsFromSourceCountOnChange(value) {
    console.log('showFeedsFromSourceCountOnChange ' + value);
    const { setNewsCount } = this.props.feedsListActions;
    setNewsCount(value);
  }

  render() {
    const { settings, feeds } = this.props;
    //let isChecked = true;
    const s = Object.keys(settings).map(function (key) {return {name: key, value : settings[key]}});
    console.log(s);
    console.log(settings);
    console.log(this.props);
    console.log(feeds);

    var boundAddSourceClick = this.addSourceClick.bind(this);

    return (<div>
      <p>Settings page!</p>
      <Link to='/'>home</Link>
      <br/>
      <br/>
      
      {
        s.map( (value, i) => {
          console.log(value);
          var boundClick = this.checkboxOnChange.bind(this, value.name, value.value);
          return(
            <div key={i}>
              <CheckBox isChecked={value.value} onClick={boundClick}/>
              {value.name}
            </div>
          );
        }, s)
      }

      <ShowFeedsFromSourceCount currentValue={feeds.newsCount} onChange={this.showFeedsFromSourceCountOnChange.bind(this)}/>

      {
        feeds.feedsURLs.map((value, i) => {
          var boundClick = this.feedSourceInfoOnClick.bind(this);
          return (
            <div key={i}>
              <FeedSourceInfo source={value.name} id={i} url={value.url} onClick={boundClick}/>
            </div>
          );
        }, feeds)
      }

      <AddSource onClick={boundAddSourceClick}/>

    </div>);
  }
}

function mapStateToProps(state) {
  return {
    feeds: state.feeds,
    settings: state.settings
  }
}

function mapDispatchToProps(dispatch) {
  return {
    settingsActions: bindActionCreators(settingsActions, dispatch),
    feedsListActions: bindActionCreators(feedsListActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
