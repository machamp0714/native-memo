import { connect } from 'react-redux';
import AddToDo from '../screens/AddTodo';
import { Dispatch } from 'redux';
import { ToDoParams, addToDo } from '../actions/todo';
import { ToDo } from '../screens/TodoList';
import { ToDoState } from '../reducers/todo';

interface StateProps {
  todos: ToDo[];
}

interface DispatchProps {
  addToDo: (latestToDo: ToDo, params: ToDoParams) => void;
}

const mapStateToProps = (state: ToDoState): StateProps => ({
  todos: state.todos
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  addToDo: (latestToDo, params) => dispatch(addToDo(latestToDo, params))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddToDo);
