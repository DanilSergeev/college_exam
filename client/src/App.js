import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css'

import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./page/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Register from "./page/Register";
import Login from "./page/Login";
import Reviews from './page/Reviews';
import Moderation from './page/Moderation';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/reviews" element={<Reviews />}></Route>
        <Route path="/moderation" element={<Moderation />}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
