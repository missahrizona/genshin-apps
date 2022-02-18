import "./App.css";
import {
  BrowserRouter,
  Switch,
  Link,
  Route,
  Outlet,
  Router,
  Routes,
} from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;