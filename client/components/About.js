import React, { Component, PropTypes } from 'react';
import { RaisedButton, AppBar, Styles } from 'material-ui';
import { fetchData } from '../actions/about';

class About extends Component {
  componentDidMount() {
    this.props.showSomething();
  }
  render() {
    return (
      <div>
        <p onClick={ this.props.showSomething }>
          { this.props.about ? 'Got it!' : 'Click here to show about' }
        </p>
        {() => {
          if (this.props.about) {
            return this.props.about.map((item, index) => {
              return <div key={index}>{ item.get('title') }</div>;
            });
          }
        }()}
        <RaisedButton label="Default" />
      </div>
    );
  }
}

About.fetchData = fetchData;

export default About;
