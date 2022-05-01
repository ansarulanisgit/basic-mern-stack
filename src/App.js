import "./App.css";
import { Route, Routes } from "react-router-dom";
import AddUser from "./components/AddUser/AddUser";
import Home from "./components/Home";
import Header from "./components/Header";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import UpdateUser from "./components/UpdateUser";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/adduser" element={<AddUser></AddUser>}></Route>
        <Route path="/update/:id" element={<UpdateUser></UpdateUser>}></Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
