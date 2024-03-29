import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import InputForm from '../components/InputForm';

const mapStateToProps = state => ({
  inputFieldList: state.fields,
  fullDate: state.fullDate,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InputForm);
