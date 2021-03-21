import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Destination from './Components/Destination/Destination';
import Contact from './Components/Contact/Contact';
import Blog from './Components/Blog/Blog';
import Login from './Components/Login/Login';
import NotFound from './NotFound/NotFound';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';


export const UserContext = createContext();
function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value ={[loggedInUser,setLoggedInUser]}>
     
    <Router className="container" >
      <Header/>
      <Switch>
     
        <Route path="/home">
          <Home/>
        </Route>
        <PrivateRoute path="/destination/:id">
          <Destination/>
        </PrivateRoute>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/blog">
          <Blog/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
       
        
      </Switch>
    </Router>
  </UserContext.Provider>
  );
}

export default App;
