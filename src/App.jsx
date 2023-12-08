import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFoundPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
