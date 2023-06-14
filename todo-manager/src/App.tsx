import { useState } from "react";
import Auth from "./component/Auth";
import AddTodo from "./component/AddTodo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Auth />
      <AddTodo />
    </div>
  );
}

export default App;
