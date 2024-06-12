import "./App.scss";
import Landing from "../pages/Landing/Landing.jsx";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Landing />
    </BrowserRouter>
  );
}
