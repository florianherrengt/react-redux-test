import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import App from '../components/App';
import * as AppActions from '../actions/app';

function mapStateToProps(state) {
	return {
		app: state.app,
		signin: state.signin
	};
}

function mapDispatchToProps(dispatch) {
	console.log('mapDispatchToProps:action', dispatch);
 	return bindActionCreators(AppActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
