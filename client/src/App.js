import {
  BrowserRouter,
  Route,
  Routes,} from "react-router-dom";
  //Switch -> Route
 
  import LandingPage from './components/views/LandingPage/LandingPage'
  import LoginPage from './components/views/LoginPage/LoginPage'
  import RegisterPage from './components/views/RegisterPage/RegisterPage'

 
  function App() {
    return (
      //component -> element
      <BrowserRouter>
      <Routes>
      
      <Route exact path="/" element = {<LandingPage/>}/>
      <Route exact path="/login" element = {<LoginPage/>}/>
      <Route exact path="/register" element = {<RegisterPage/>}/>
      
      </Routes>
      </BrowserRouter>
    );
  }

export default App;