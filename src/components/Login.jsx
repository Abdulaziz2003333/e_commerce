import React from 'react';
import heroImg from '../assets/dl.beatsnoop 1.png'
const Login = () => {
    return (
        <div className="flex items-center w-full">
            <div><img src={heroImg} className=""/></div>
            <div className="flex flex-col justify-center items-center w-[371px]">
                <div>
                    <h1>Create an account</h1>
                    <p>Enter your details below</p>
                </div>
                <div  >
                    <form className="flex flex-col ">
                        <input type="text"/>
                        <input type="text"/>
                        <input type="password"/>
                        <button type="submit">Create Account</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;