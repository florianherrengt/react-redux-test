import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import About from '../components/About';
import * as AboutActions from '../actions/about';

function mapStateToProps(state) {
  return {
    about: state.about
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AboutActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
