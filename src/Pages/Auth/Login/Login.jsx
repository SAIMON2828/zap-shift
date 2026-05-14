// import React from 'react';

import { useForm } from "react-hook-form";
import useAuth from "../../../Hookes/useAuth";
import { Link } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {

    const {register, handleSubmit, formState:{errors}} = useForm();

          
    const { singInUser } = useAuth();

    const handleLogin = (data) =>{
             console.log(data);
             singInUser(data.email, data.password)
             .then(result=>{
                console.log(result);
             })
             .catch(error=>{
                console.log(error);
             })
    }

    return (
        <div>
           
            <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
                 <h2 className="text-center text-5xl font-bold mb-4 mt-4">Welcome Back</h2>
                 <p className="text-center font-bold">Please Login</p>
                <form className="card-body" onSubmit={handleSubmit(handleLogin)}>
                    <fieldset className="fieldset">
                        {/* email field */}
                        <label className="label">Email</label>
                        <input type="email" {...register('email', {required:true})} className="input" placeholder="Email" />
                        {
                            errors.email?.type=== 'required' && <p className="text-red-500">Email is required</p>
                        }
                        {/* password field */}
                        <label className="label">Password</label>
                        <input type="password" {...register('password', {required:true})} className="input" placeholder="Password" />
                        {
                            errors.password?.type=== 'required' && <p className="text-red-500">password is required</p>
                        }
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                    <p>New to Zap Shift? <Link to="/register" className="text-orange-500">Register</Link> </p>
                </form>
                 <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;