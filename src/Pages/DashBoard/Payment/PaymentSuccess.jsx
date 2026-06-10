// import React from 'react';

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecur from "../../../Hookes/useAxiosSecur";

const PaymentSuccess = () => {
    const [searchParams] = useSearchParams();
    const [paymentInfo, setPaymentInfo] = useState({});
    const sessionId = searchParams.get('session_id');
    const axiosSecure = useAxiosSecur();

    useEffect(()=>{
       if(sessionId){
          axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
          .then(res=>{
            console.log(res.data);
            setPaymentInfo({
                transactionId: res.data.transactionId,
                trackingId: res.data.trackingId
            })
          })
       }
    }, [sessionId, axiosSecure])

    return (
        <div>
            <h2 className="text-4xl">Payment successful</h2>
            <p>Your transationId: {paymentInfo.transactionId}</p>
            <p>Your Parcel TrackingId: {paymentInfo.trackingId}</p>
        </div>
    );
};

export default PaymentSuccess;