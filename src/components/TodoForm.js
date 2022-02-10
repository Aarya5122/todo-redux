import React, { useState } from "react";

import { 
    Form,
    FormGroup,
    Input,
    InputGroup,
    Button
} from "reactstrap";

import { v4 } from "uuid"

import { addTodo } from "../action/todo";
import { connect } from "react-redux";

const TodoForm = ( {insertTodo} ) => {

    const [title, setTitle] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if(title === ""){
            return alert("Enter a Todo!");
        }

        const todo = {
            id: v4(),
            title
        }

        insertTodo(todo)
        setTitle("")
    }

    return(
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                    <Input
                    type="text"
                    name="todo"
                    id="todo"
                    placeholder="Enter Todo"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    />
                    <Button
                    color="warning"
                    onClick={handleSubmit}
                    >
                        Add Todo
                    </Button>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}

const mapStatetoProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
    insertTodo: todo => {
        dispatch(addTodo(todo))
    }
})

export default connect(mapStatetoProps, mapDispatchToProps)(TodoForm);