// import React from 'react';

import { useForm, useWatch } from "react-hook-form";
import useAuth from "../../Hookes/useAuth";
import useAxiosSecur from "../../Hookes/useAxiosSecur";
import { useLoaderData } from "react-router";
import agentPending from "../../assets/agent-pending.png";
import Swal from "sweetalert2";

const Rider = () => {
    const {
        register,
        handleSubmit,
        control,
        // formState: { errors }
    } = useForm();

    const { user } = useAuth();
    const axiosSecure = useAxiosSecur();

    const serviceCenters = useLoaderData();
    const regionsDuplicate = serviceCenters.map(c => c.region);
    const region = [...new Set(regionsDuplicate)];
    const yourRegion = useWatch({ control, name: 'yourRegion' });

    const handleRiderApplication = data => {
        console.log(data);
        axiosSecure.post('/riders', data)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your application has been submitted. We will reach out with in 30 days",
                        showConfirmButton: false,
                        timer: 2500
                    });
                }
            })
    }

    const districtsByRegion = region => {
        const regionDistrics = serviceCenters.filter(c => c.region === region);
        const districts = regionDistrics.map(d => d.district);
        return districts;
    }

    return (
        <div>
            <h2 className="text-4xl text-[#03373D] mt-12 font-bold">Be a Rider</h2>
            <p className="text-[#606060] mt-3">
                Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal <br /> packages to business shipments — we deliver on time, every time.
            </p>
            <form onSubmit={handleSubmit(handleRiderApplication)} className="mt-3 p-4 text-black">

                {/* trow column */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Rider details */}

                    <fieldset className="fieldset">
                        <h4 className="text-2xl font-semibold">Tell us about yourself</h4>
                        {/* Your name */}
                        <label className="label">Your Name</label>
                        <input type="text" {...register('yourName')}
                            defaultValue={user?.displayName}
                            className="input w-full" placeholder="Your Name" />
                        <label className="label">Driving License Number</label>
                        <input type="number" {...register('drivingLicense')}
                            className="input w-full" placeholder="Driving License Number"
                        />

                        {/* your email */}
                        <label className="label">Your Email</label>
                        <input type="text" {...register('yourEmail')}
                            defaultValue={user?.email}
                            className="input w-full" placeholder="Your Email" />

                        {/* region */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Your Region</legend>
                            <select {...register('yourRegion')} defaultValue="Pick a region" className="select">
                                <option disabled={true}>Select your Region</option>
                                {
                                    region.map((r, index) => <option key={index} value={r}>{r}</option>)
                                }
                            </select>
                        </fieldset>

                        {/*  District */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Your District</legend>
                            <select {...register('yourDistrict')} defaultValue="Pick a district" className="select">
                                <option disabled={true}>Select your District</option>
                                {
                                    districtsByRegion(yourRegion).map((r, index) => <option key={index} value={r}>{r}</option>)
                                }
                            </select>
                        </fieldset>


                        {/* NID Number */}
                        <label className="label mt-4">NID Number</label>
                        <input type="number" {...register('nidNumber')} className="input w-full" placeholder="NID" />

                        {/* Phone Number */}
                        <label className="label mt-4">Phone Number</label>
                        <input type="number" {...register('phoneNumber')} className="input w-full" placeholder="Phone Number" />

                        {/*Bike Info */}
                        <label className="label mt-4">Bike Brand Model and Year</label>
                        <input type="text" {...register('bikeBrandModelAndYear')} className="input w-full" placeholder="Bike Brand Model and Year" />

                        {/* About */}
                        <label className="label mt-4">Tell us About yourself</label>
                        <input type="text" {...register('yourSelf')} className="input w-full" placeholder="Tell us About yourself" />
                    </fieldset>

                    {/* receiver Details */}

                    <img src={agentPending} alt="" />

                </div>


                <input type="submit" value="Apply as a Rider" className="btn btn-primary text-black mt-5" />
            </form>
        </div>
    );
};

export default Rider;