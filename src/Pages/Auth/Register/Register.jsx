// import React from 'react';

import { useForm } from "react-hook-form";
import useAuth from "../../../Hookes/useAuth";
import { Link } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
    
    const { register, handleSubmit, formState:{ errors } } = useForm();
    const {registerUser} = useAuth();

    const handleregistration = (data) =>{
          console.log('after register', data);
          registerUser(data.email, data.password)
          .then(result=>{
            console.log(result.user);
            // store the image and get the photo url 
            
            // update user profile
          })
          .catch(error =>{
            console.log(error);
          })

    }

    return (
        <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit(handleregistration)}>
                <h2 className="text-3xl text-center font-bold">Welcome to <br />ZapShift</h2>
                {/* name field */}
                <fieldset className="fieldset">
                    <label className="label">Name</label>
                    {/* email */}
                    <input type="text" {...register('name', {required:true})} className="input" placeholder="Your Name" />
                    {
                        errors.name?.type==='required' && <p className="text-red-500">
                            Name is required
                        </p>
                    }
                {/* photo field */}
                    <label className="label">photo</label>
                    {/* email */}
                    <input type="file" {...register('photo', {required:true})} className="file-input" placeholder="Your photo" />
                    {
                        errors.photo?.type==='required' && <p className="text-red-500">
                            Photo is required
                        </p>
                    }
                    {/* email */}
                    <label className="label">Name</label>
                    <input type="email" {...register('email', {required:true})} className="input" placeholder="Email" />
                    {
                        errors.email?.type==='required' && <p className="text-red-500">
                            Email is required
                        </p>
                    }
                    {/* password */}
                    <label className="label">Password</label>
                    <input type="password" {...register('password', {
                        required:true,
                        minLength:6,
                        pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#()[\]{}\-_=+|\\:;"'<>,./~`]).{8,}$/
                    })} className="input" placeholder="Password" />
                    {
                        errors.password?.type==='required' && <p className="text-red-500">
                            Password is required
                        </p>
                    }
                    {
                        errors.password?.type==='minLength' && <p className="text-red-500">
                            Password must be 6 characters or longer
                        </p>
                    }
                    {
                        errors.password?.type==='pattern' && <p className="text-red-500">
                            passwor must have at least one upercase, at least one lowercase, <br /> at least one number and one special characters
                        </p>
                    }
                    <div><p>Already have a account? please <Link to="/login" className="text-blue-400">
                    Login</Link>  </p></div>
                    <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;