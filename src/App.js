import './App.css';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact';
import { BrowserRouter, Route , Routes ,Navigate } from 'react-router-dom';
import Review from './pages/Review';
import { Admin } from './pages/Admin/Admin';
import ReviewDisplay from './pages/ReviewDisplay';
import Login from './components/login/Login';
import Register from './components/Register/Register';
import {useState} from 'react'
import {auth} from './firebase-config'
import Service from './components/services/Service';
  import { AuthProvider } from "./AuthProvider";




 


function App() {
  const [user , setUser] = useState({})
 
  
//   onAuthStateChanged(auth ,(currentUser)=>{
//     setUser(currentUser);
    
// })

 

  // const RequireAuth = ({children}) =>{
  //   return currentUser ? children : <Navigate to = '/login' />
  // }
//   onAuthStateChanged(auth ,(currentUser)=>{
//    



  return (
    <AuthProvider>
    <BrowserRouter>
      <div className="App">
     <Header />
     
     <Routes>
       <Route path="/login" element={<Login />} /> 
      {/* <Route path = '/'  element={<RequireAuth><Banner/> <Projects /> <ReviewDisplay /> < Contact /></RequireAuth> } exact /> */}
      <Route path= '/' >
      <Route path = '/'  element={<><Banner/> <Projects /> <ReviewDisplay /><Service /> < Contact /></> } exact />
        
      </Route>
     
       <Route path = '/review'  element={<><Review/></> } />
       <Route path = '/admin'  element={<><Admin/></> } />
      
       <Route path="/register" element={<Register />} />
         

     
      </Routes>
    
     
     <Footer /> 
    </div>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
