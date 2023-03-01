import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddNote from "./Component/addNote/AddNote"
import ViewAllNote from "./Component/viewAllNote/ViewAllNote"
import Navbar from "./Component/navbar/Navbar";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<AddNote />} />
          <Route path="view" element={<ViewAllNote />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}
export default App;