import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Landing from '../components/Landing';
import * as LandingActions from '../actions/landing';

function mapStateToProps(state) {
    // console.log('mapStateToProps:landing', state);
    return {
        landing: state.landing,
        locales: state.locales
    };
}

function mapDispatchToProps(dispatch) {
    // console.log('mapDispatchToProps:action', dispatch);
    return bindActionCreators(LandingActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
