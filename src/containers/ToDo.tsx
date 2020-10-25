import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { updateToDo, deleteToDo, ToDoParams } from '../actions/todo';
import ToDoScreen from '../screens/Todo';

interface DispatchProps {
  updateToDo: (id: number, params: ToDoParams) => void;
  deleteToDo: (id: number) => void;
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  updateToDo: (id, params) => dispatch(updateToDo(id, params)),
  deleteToDo: id => dispatch(deleteToDo(id))
});

export default connect(null, mapDispatchToProps)(ToDoScreen)
