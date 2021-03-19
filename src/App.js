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
function App() {
  return (
    <Router className="container">
      <Header/>
      <Switch>
     
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/destination">
          <Destination/>
        </Route>
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
   
  );
}

export default App;
