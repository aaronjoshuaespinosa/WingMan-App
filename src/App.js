import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import './index.css'

function App() {
  return (
    <>
    <Routes>
      <Route path="/login" element={<Login/>}></Route>
    </Routes>
    </>
  );
}

export default App;
