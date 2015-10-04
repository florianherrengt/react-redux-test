import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import App from '../components/App';
import * as AppActions from '../actions/app';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

function mapStateToProps(state) {
	console.log('mapStateToProps:app', state);
  return {
    app: state.app
  };
}

function mapDispatchToProps(dispatch) {
	console.log('mapDispatchToProps:action', dispatch);
  return bindActionCreators(AppActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
