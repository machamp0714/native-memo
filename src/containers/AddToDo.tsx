import { connect } from 'react-redux';
import AddToDo from '../screens/AddToDo';
import { Dispatch } from 'redux';
import { ToDoParams, addToDo } from '../actions/todo';

interface DispatchProps {
  addToDo: (params: ToDoParams) => void;
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  addToDo: (params: ToDoParams) => dispatch(addToDo(params))
});

export default connect(null, mapDispatchToProps)(AddToDo);
