import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { updateToDo, ToDoParams } from '../actions/todo';
import ToDoScreen from '../screens/Todo';

interface DispatchProps {
  updateToDo: (id: number, params: ToDoParams) => void;
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  updateToDo: (id, params) => dispatch(updateToDo(id, params))
});

export default connect(null, mapDispatchToProps)(ToDoScreen)
