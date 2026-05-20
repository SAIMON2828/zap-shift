// import React from 'react';

import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router";

const SendParcel = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const serviceCenters = useLoaderData();
    const regionsDuplicate = serviceCenters.map(c => c.region);
    const region = [...new Set(regionsDuplicate)];
    console.log(region)
    const senderRegion = watch('senderRegion');

    const districtsByRegion = region =>{
        const regionDistrics = serviceCenters.filter( c => c.region === region);
        const districts = regionDistrics.map( d => d.district);
        return districts;
    }

    const handleSendParcel = data => {
        console.log(data);
    }
    return (
        <div>
            <h2 className="text-5xl font-bold">Send a Parcel</h2>
            <form onSubmit={handleSubmit(handleSendParcel)} className="mt-12 p-4 text-black">
                {/* parcel type */}
                <div>
                    <label className="label mr-4">
                        <input type="radio" {...register('parcelType')} value="document" className="radio" defaultChecked />
                        Document

                    </label>
                    <label className="label">
                        <input type="radio" {...register('parcelType')} value="non-document" className="radio" />
                        Non-document

                    </label>
                </div>

                {/* parcel info: name, weight */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-8">
                    <fieldset className="fieldset">
                        <label className="label">Parcel Name</label>
                        <input type="text" {...register('parcelName')} className="input w-full" placeholder="Parcel Name" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <label className="label">Parcel Weight (kg)</label>
                        <input type="number" {...register('parcelWeight')} className="input w-full" placeholder="Parcel Weight" />
                    </fieldset>
                </div>

                {/* trow column */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* sender details */}

                    <fieldset className="fieldset">
                        <h4 className="text-2xl font-semibold">Sender Details</h4>
                        {/* sender name */}
                        <label className="label">Sender Name</label>
                        <input type="text" {...register('senderName')} className="input w-full" placeholder="Sender Name" />

                        {/* sender email */}
                        <label className="label">Sender Email</label>
                        <input type="text" {...register('senderEmail')} className="input w-full" placeholder="Sender Email" />

                        {/* sender address */}
                        <label className="label mt-4">Sender Address</label>
                        <input type="text" {...register('senderAddress')} className="input w-full" placeholder="Sender Address" />

                        {/* sender phoneNumber */}
                        <label className="label mt-4">Sender Number</label>
                        <input type="number" {...register('senderPhoneNumber')} className="input w-full" placeholder="Sender Phone Number" />

                        {/* sender region */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Region</legend>
                            <select {...register('senderRegion')} defaultValue="Pick a region" className="select">
                                <option disabled={true}>Pick Region</option>
                               {
                                region.map((r, index)=>  <option key={index} value={r}>{r}</option>)
                               }
                            </select>
                        </fieldset>

                        {/* sender District */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Districts</legend>
                            <select {...register('senderDistrict')} defaultValue="Pick a district" className="select">
                                <option disabled={true}>Pick District</option>
                               {
                                districtsByRegion(senderRegion).map((r, index)=>  <option key={index} value={r}>{r}</option>)
                               }
                            </select>
                        </fieldset>

                      

                        {/* pickup instruction */}
                        <label className="label mt-4">Pickup Instruction</label>
                        <input type="text" {...register('pickupInstruction')} className="input w-full" placeholder="Pickup Instruction" />
                    </fieldset>

                    {/* receiver Details */}
                    <fieldset className="fieldset">
                        <h4 className="text-2xl font-semibold">Receiver Details
                        </h4>

                        {/* receiver name */}
                        <label className="label">Receiver Name</label>
                        <input type="text" {...register('receiverName')} className="input w-full" placeholder="Receiver Name" />

                        {/* receiver email */}
                        <label className="label">Receiver Email</label>
                        <input type="text" {...register('receiverEmail')} className="input w-full" placeholder="Receiver Email" />

                        {/* receiver address */}
                        <label className="label mt-4">Receiver Address</label>
                        <input type="text" {...register('receiverAddress')} className="input w-full" placeholder="Receiver Address" />

                        {/* receiver phoneNumber */}
                        <label className="label mt-4">Receiver Number</label>
                        <input type="number" {...register('receiverPhoneNumber')} className="input w-full" placeholder="Receiver Phone Number" />

                        {/* receiver District */}
                        <label className="label mt-4">Receiver District</label>
                        <input type="text" {...register('receiverDistrict')} className="input w-full" placeholder="Receiver District" />

                        {/* Delivery instruction */}
                        <label className="label mt-4">Delivery Instruction</label>
                        <input type="text" {...register('deliveryInstruction')} className="input w-full" placeholder="Delivery Instruction" />
                    </fieldset>
                </div>


                <input type="submit" value="Send parcel" className="btn btn-primary text-black mt-5" />
            </form>
        </div>
    );
};

export default SendParcel;