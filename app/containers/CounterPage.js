import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import * as PersonsActions from '../actions/person';

function mapStateToProps(state) {
  return {
    person: state.person.persons
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PersonsActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
