import "./App.css";
import Todo from "./components/Todo/Todo";
import FormTodo from "./components/FormTodo/FormTodo";
import Button from "./components/Button/Button";
import { useReducer } from "react";

const stateDefaultValue = {
  todos: [],
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "AddTodo":
      let id = state.counter;
      state.counter++;
      state.todos = [...state.todos, { ...todo, id: id }];

    // eslint - disable - next - line;
    case "deleteTask": {
      state.todos = state.todos.filter((obj) => obj.id != action.payload);
    }
    // eslint - disable - next - line;
    default:
  }

  return {
    ...state,
    // todos: state.todos,
    // counter: state.counter,
  };
};

const todo = {};

function App() {
  const [state, dispatch] = useReducer(reducer, stateDefaultValue);

  const handleInputChange = (e) => {
    todo[e.target.name] = e.target.value;
    // console.log(todo);
  };

  const handleAddDispatch = () => {
    dispatch({ type: "AddTodo" });
  };

  const handleDeleteDispatch = (e) => {
    dispatch({
      type: "deleteTask",
      payload: e.target.id,
    });
  };

  return (
    <div className="App">
      <FormTodo state={state} onChange={handleInputChange}>
        <Button onClick={handleAddDispatch}>Aggiungi</Button>
      </FormTodo>

      {state.todos.map((obj, index) => {
        return (
          <Todo key={index} todoData={obj} onClick={handleDeleteDispatch} />
        );
      })}
    </div>
  );
}

export default App;
