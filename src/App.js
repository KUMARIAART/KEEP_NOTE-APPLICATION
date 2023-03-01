import './App.css';
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import AddNote from "./Component/addNote/AddNote"
import ViewAllNote from "./Component/viewAllNote/ViewAllNote"
function App() {
  return (
    <>
      <BrowserRouter>
      <Link to="/">Add Note</Link>
      <Link to="view">View All Note</Link>
        <Routes>
          <Route path="/" element={<AddNote />} />
          <Route path="view" element={<ViewAllNote />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}
export default App;