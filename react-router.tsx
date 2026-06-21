// here we imported the screens from whcih we will load up the single page routes
import { BrowserRouter, Routes, Route } from "react-router";
import Auth from "./screens/auth";
import Dashboard from "./screens/dashboard";
import Boards from "./screens/boards";
//routes setup in app component 
function App() {
  return (
    <div>
      hi there 
    <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/boards" element={<Boards />} />
        </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
