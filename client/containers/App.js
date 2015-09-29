import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import * as CounterActions from '../actions/counter';

function mapStateToProps(state) {
	console.log('mapStateToProps:counter', state);
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
	console.log('mapDispatchToProps:action', dispatch);
  return bindActionCreators(CounterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
