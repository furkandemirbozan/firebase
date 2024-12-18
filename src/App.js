
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

function App() {
  const [users, setUsers] = useState()


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUsers(user)
      }
    })
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="dashboard" element={<Home users={users} />} />
        </Routes>
        <ToastContainer
          position='top-right'
          autoClose={5000}
          theme='light'
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
