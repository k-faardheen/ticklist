import "./app.css";
import Header from "./Header";
import TodoHome from "./TodoHome";

function App() {
  return (
    <div className="app">
      {/* HEADER */}
      <Header />

      {/* INPUT FIELD */}
      <TodoHome />

      {/* TODO LIST */}
    </div>
  );
}

export default App;
