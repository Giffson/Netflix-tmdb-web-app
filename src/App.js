import Navbar from "./components/Navbar";
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Footer from "./components/Footer";



function App() {
  return (
   <>
   <AuthContextProvider>
   <Navbar />
  <Routes>
    <Route  path='/' index exact element={<Home />}/>
    <Route  path='/login' element={<Login />}/>
    <Route  path='/signup' element={<SignUp />}/>
    <Route  path='/account' element={<ProtectedRoute>
      <Account />
    </ProtectedRoute>}/>

  </Routes>
  <Footer />
   </AuthContextProvider>
  

   </>
  );
}

export default App;
