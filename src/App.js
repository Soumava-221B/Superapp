import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./component/Register/Register"
import GenrePage from './pages/GenrePage/GenrePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register"element={<RegisterPage />}/>
        <Route path="/genre"element={<GenrePage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
