// import React from 'react';

import { useEffect } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecur from "../../../Hookes/useAxiosSecur";

const PaymentSuccess = () => {
    const [searchParams] = useSearchParams();
    const sessionId = searchParams.get('session_id');
    const axiosSecure = useAxiosSecur();

    useEffect(()=>{
       if(sessionId){
          axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
          .then(res=>{
            console.log(res.data);
          })
       }
    }, [sessionId, axiosSecure])

    return (
        <div>
            <h2 className="text-4xl">Payment successful</h2>
        </div>
    );
};

export default PaymentSuccess;