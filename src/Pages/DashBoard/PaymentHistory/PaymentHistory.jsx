// import React from 'react';

import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hookes/useAuth";
import useAxiosSecur from "../../../Hookes/useAxiosSecur";

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecur();
    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments?email=${user.email}`)
            return res.data;
        }
    })
    return (
        <div>
            <h2 className="text-5xl">My Payments: {payments.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Amount</th>
                            <th>Transaction Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((payment, index) => <tr className="bg-base-200" key={payment._id}>
                            <th>{index + 1}</th>
                            <td></td>
                            <td>{payment.amount}</td>
                            <td>{payment.transactionId}</td>
                        </tr>)
                        }
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;