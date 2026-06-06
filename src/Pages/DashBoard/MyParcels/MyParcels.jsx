// import React from 'react';

import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hookes/useAuth";
import useAxiosSecur from "../../../Hookes/useAxiosSecur";
import { FaRegEdit } from "react-icons/fa";
import { FaMagnifyingGlass, FaTrashCan } from "react-icons/fa6";
import Swal from "sweetalert2";

const MyParcels = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecur();

    const { data: parcels = [], refetch } = useQuery({
        queryKey: ['myParcels', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels?email=${user.email}`);
            return res.data;
        }
    })

    const handleParcelDelete = id => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed)
                axiosSecure.delete(`/parcels/${id}`)
                    .then(res => {
                        console.log(res.data);

                        if (res.data.deletedCount) {
                            // refresh the data in the UI
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your parcel has been deleted.",
                                icon: "success"
                            });
                        }
                    })

        });
    }
    return (
        <div>
            <h1>My Parcels : {parcels.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Receiver Name</th>
                            <th>Price</th>
                            <th>Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            parcels.map((parcel, index) => <tr key={parcel._id}>
                                <th>{index + 1}</th>
                                <td>{parcel.senderName}</td>
                                <td>{parcel.parcelType}</td>
                                <td>{parcel.receiverName}</td>
                                <td>{parcel.cost}</td>
                                <td>
                                    <div className="tooltip">
                                        <div className="tooltip-content">
                                            <div className="animate-bounce text-orange-400 -rotate-10 h-3 font-black">Edit</div>
                                        </div>
                                        <button className="btn btn-square hover:bg-primary">
                                            <FaRegEdit />
                                        </button>
                                    </div>
                                    <div className="tooltip">
                                        <div className="tooltip-content">
                                            <div className="animate-bounce text-orange-400 -rotate-10 h-3 font-black">Details</div>
                                        </div>
                                        <button className="btn btn-square hover:bg-amber-400 mx-3">
                                            <FaMagnifyingGlass />
                                        </button>

                                    </div>
                                    <div className="tooltip">
                                        <div className="tooltip-content">
                                            <div className="animate-bounce text-orange-400 -rotate-10 h-3 font-black">Delete!</div>
                                        </div>
                                        <button
                                            onClick={() => handleParcelDelete(parcel._id)}
                                            className="btn btn-square hover:bg-red-600">
                                            <FaTrashCan />
                                        </button>
                                    </div>
                                </td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyParcels;