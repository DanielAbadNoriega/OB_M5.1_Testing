import "./App.css";
import Todo from "./testcomponents/Todo";

function App() {
  const todos = [
    { id: "1", text: "Primera tarea", completed: false },
    { id: "2", text: "Segunda tarea", completed: false },
    { id: "3", text: "Tercera tarea", completed: false },
  ];

  return (
    <div className="App">
      <h1>Open Bootcamp: React JS - Testing</h1>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default App;
