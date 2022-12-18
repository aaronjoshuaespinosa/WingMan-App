import { Route, Routes } from 'react-router-dom'
import { Join, Login, Dashboard } from './pages'
import './index.css'

function App() {
  return (
    <>
    <Routes>
      <Route path="/sign-in" element={<Login/>}></Route>
      <Route path="/join-us" element={<Join/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
    </Routes>
    </>
  );
}

export default App;
