import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { toggleTodo } from "../actions";
import { getVisibleTodos } from "../reducers";
import TodoList from "./TodoList";

const mapStateToProps = (state, { match }) => ({
  todos: getVisibleTodos(state, match.filter || "all")
});

// const mapDispatchToProps = dispatch => ({
//   onTodoClick(id) {
//     dispatch(toggleTodo(id));
//   }
// });

const VisibleTodoList = withRouter(
  connect(
    mapStateToProps,
    // mapDispatchToProps
    { onTodoClick: toggleTodo }
  )(TodoList)
);

export default VisibleTodoList;
