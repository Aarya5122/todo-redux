import React from "react";

import {
  Col,
  Container, Row
} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"

import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";

import { Provider } from "react-redux"
import store from "./store/store";

const App = () => {
    return(
      <Provider store={store}>
        <Container fluid>
          <Row>
              <Col>
                <Todo/>
              </Col>
          </Row>
          <Row className="sticky-bottom">
            <Col>
              <TodoForm/>
            </Col>
          </Row>
        </Container>
      </Provider>
    )
}

export default App;