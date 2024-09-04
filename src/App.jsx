import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import EmpleadoList from './components/EmpleadoList'
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <EmpleadoList></EmpleadoList>
      </div>
    </>
  );
}

export default App;
