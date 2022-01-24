import './App.css';
import {Component} from "react";
import { Auth, Home } from "./pages";
import { Route, Routes} from "react-router-dom";
import {LoginForm, RegForm} from "./modules";
import './styles/reg.scss'



class App extends Component{
  render() {
    return (
        <div className={'reg'}>
        <Routes>

            <Route path= '/'  element={<LoginForm/>}/>
            <Route path= '/registration' element={<RegForm/>}/>
            <Route path='/home' element={<Home/>}/>


        </Routes>
        </div>
      )
  }
}

export default App;
