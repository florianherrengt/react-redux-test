import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Signin from '../components/Signin';
import * as SigninActions from '../actions/signin';

function mapStateToProps(state) {
	console.log('mapStateToProps:signin', state);
  return {
    signin: state.signin
  };
}

function mapDispatchToProps(dispatch) {
	console.log('mapDispatchToProps:action', dispatch);
  return bindActionCreators(SigninActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
