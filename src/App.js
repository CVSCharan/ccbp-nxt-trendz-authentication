import { Route, Routes } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

import "./App.css";

const App = () => (
  <Routes>
    <Route exact path="/login" element={<LoginForm />} />
    <Route exact path="/" element={<Home />} />
    <Route element={<NotFound />} />
  </Routes>
);

export default App;
