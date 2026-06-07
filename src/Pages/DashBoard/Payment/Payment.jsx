// import React from 'react';

import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import useAxiosSecur from "../../../Hookes/useAxiosSecur";

const Payment = () => {
    const { parcelId } = useParams();
    const axiosSecure = useAxiosSecur();
    const { isLoading, data: parcel } = useQuery({
        queryKey: ['parcels', parcelId],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels/${parcelId}`);
            return res.data;
        }
    })

    const handlePayment = async() =>{
            const paymentInfo = {
                 cost: parcel.cost,
                 parcelId: parcel._id,
                 sendrEmail: parcel.sendrEmail,
                 parcelName: parcel.parcelName
               }

            const res = await axiosSecure.post('/create-checkout-session', paymentInfo);
            console.log(res.data);   
            window.location.href = res.data.url;
    }


    if (isLoading) {
        return <div className="h-full items-center">
            <span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-xs"></span>
        </div>
    }

    return (
        <div>
            <h2>Please Pay ${parcel.cost} For: {parcel.parcelName}</h2>
            <button onClick={handlePayment} className="btn btn-primary text-black">Pay</button>
        </div>
    );
};

export default Payment;