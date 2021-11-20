import { useSelector } from 'react-redux';
import {Redirect} from 'react-router-dom';
import { useState } from 'react';
import './authentication-component.css';

export const AuthComponent = () => {
    const isSignedIn = useSelector( state => state.auth.isSignedIn);
    return (
        <section className='login-signup'>
            {isSignedIn && <Redirect to='/tasks'/>}
            <section className='app-background'></section>
            <section className='form-container'>
                <section className='animation-parent'>

                <Login></Login>
                </section>
                
            </section>
        </section>
    )
}


const Login = () => {
    let userName = '';
    let password = '';
    const logIn = () => {
        console.log(userName, password);
    }


    return(
        <section className='login-form'>
            <input className='username' onChange={(e) => userName = e.target.value} value={userName} autoComplete='off'/>
            <input type="password" className='password' onChange={(e) => password = e.target.value} value={userName} autoComplete='off'/>
            <button className="login-btn" onClick={logIn}>Login</button>
        </section>
    )
}