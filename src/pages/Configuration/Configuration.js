import React from 'react';
import config from './../../config';
import {writeToLocalStorage, readLocalStorage} from './../../services/Storage';

export default class Configuration extends React.Component {

  componentWillMount() {
    const currentConfig = readLocalStorage(config.tweeterStorageKey) || config.defaultViewConfigurations;

    writeToLocalStorage(config.tweeterStorageKey, currentConfig);
  }

  render() {
    const style = require('./Configuration.scss');

    return (
      <div className={style.MainContainer}>
        <div className={style.ThemeOptions_container}>
          <span> Web-site theme: </span>
          <select className={style.ThemeOptions_options} id="websiteTheme">
            <option> Blue Theme</option>
            <option> Black Theme</option>
          </select>
        </div>
        <div className={style.TweetCount_container}>
          <span> Number of tweets: </span>
          <input className={style.TweetCount_input} id="tweetPerColumnCount"></input>
        </div>

      </div>
    );
  }
}
