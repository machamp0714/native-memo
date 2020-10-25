import { connect } from 'react-redux';
import ToDoList from '../screens/ToDoList';
import { ToDoState } from '../reducers/todo';

const mapStateToProps = (state: ToDoState) => ({
  todos: state.todos
});

export default connect(mapStateToProps, null)(ToDoList);
