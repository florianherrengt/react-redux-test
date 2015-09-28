import React, { Component, PropTypes } from 'react';
import { RaisedButton, AppBar, Styles } from 'material-ui';
const ThemeManager = new Styles.ThemeManager();

class About extends Component {
  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }
  componentDidMount() {
    this.props.showSomething();
  }
  render() {
    return (
      <div>
        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more" />
        <p onClick={ this.props.showSomething }>
          { this.props.about ? 'Got it!' : 'Click here to show about' }
          <br />
          Props: { JSON.stringify(this.props) }
        </p>
        {() => {
          if (this.props.about) {
            return this.props.about.map((item, index) => {
              return <div key={index}>{ item.title }</div>;
            });
          }
        }()}
        <RaisedButton label="Default" />
      </div>
    );
  }
}

About.childContextTypes = {
  muiTheme: React.PropTypes.object
};

About.fetchData = () => {
  console.log(About.props);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        about: [ {
            title: 'hello'
        }, {
            title: 'world'
        } ]
      });
    }, 1000);
  });
};

export default About;
