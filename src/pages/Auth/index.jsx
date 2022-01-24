import React from "react";
import './reg.scss'
import {LoginForm, RegForm} from "../../modules";
import {Outlet, Route, Routes} from "react-router-dom";

/*не получилось*/

const Auth =()=>{
    return(
        <div className='reg'>
            <div className="reg__content">
                <Routes>
                    <Route path='/' element={<LoginForm/> } />
                    <Route path='/registration' element={<RegForm/> } />

                </Routes>

            </div>
        </div>
    );
}


export default Auth;
