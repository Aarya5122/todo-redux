import React from "react";

import{
    ListGroup,
    ListGroupItem
} from "reactstrap"
import { FaCheckDouble } from "react-icons/fa"

import { connect } from "react-redux";

import { removeTodo } from "../action/todo"; 

const Todo = ({todos, markComplete}) => {
    return(
        <ListGroup>
            {todos.map((todo) => (
                <ListGroupItem key={todo.id}>
                    {todo.title}
                    <span onClick={()=>markComplete(todo.id)}>
                        <FaCheckDouble/>
                    </span>
                </ListGroupItem>
            ))}
        </ListGroup>
    )
}

const mapStateToProps = (state) => ({
    todos: state.reducer
})

const mapDispatchToProps = (dispatch) => ({
    markComplete: id => {dispatch(removeTodo(id))}
})

export default connect(mapStateToProps, mapDispatchToProps)(Todo)