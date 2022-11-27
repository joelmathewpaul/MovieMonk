import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Home from './home';
import LoginSignup from './login';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/login" element={<LoginSignup />} />
          <Route index element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
