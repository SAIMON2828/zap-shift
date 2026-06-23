// import React from 'react';

import { useForm } from "react-hook-form";
import useAuth from "../../../Hookes/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";
import useAxiosSecur from "../../../Hookes/useAxiosSecur";
// import { updateProfile } from "firebase/auth";


const Register = () => {
    
    const { register, handleSubmit, formState:{ errors } } = useForm();
    const {registerUser, updateUserProfile} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecur();

    const handleregistration = (data) =>{
          


          const profileImg = data.photo[0];

          registerUser(data.email, data.password)
          .then(()=>{
            
            // store the image and get the photo url 
            const formData = new FormData();
            formData.append('image', profileImg);
            
            const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`
            axios.post(image_API_URL, formData)
            .then(res =>{
                const photoURL = res.data.data.url


                // create user in the database
                const userInfo = {
                    email: data.email,
                    name: data.name,
                    photoUrl: photoURL
                }
                 axiosSecure.post('/users', userInfo)
                 .then(res =>{
                    if(res.data.insertedId){
                        console.log('user created in the database');
                    }
                 })

                // update user profile

                const userProfile = {
                    displayName : Date.name,
                    photoUrl :photoURL
                }
                updateUserProfile(userProfile)
                .then( ()=>{
                     console.log('profile uploaded successfully')
                     navigate(location.state || '/');
                    }
                )
                .catch(error => console.log(error))

                

                // const photoURL = res.data.data.url;
                // console.log('AFTER upload data', photoURL);
                // updateProfile(result.user, {
                //     displayName: data.name,
                //     photoURL:photoURL
                // })
                // .then(()=>{
                //     console.log('profile uploaded successfully')
                // })
            })
            // https://i.ibb.co/VWWbwm7j/Whats-App-Image-2026-05-14-at-11-34-36-PM.jpg
            // https://i.ibb.co/spHQ3JJX/images.jpg
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
                    <div><p>Already have a account? please <Link
                    state={location.state}
                     to="/login" className="text-blue-400">
                    Login</Link>  </p></div>
                    <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;