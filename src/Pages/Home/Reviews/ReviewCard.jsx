// import React from 'react';

import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ review }) => {
    const { userName, ratings, review:opinion, user_photoURL } = review;
    return (
        <div className="card bg-base-200 shadow-md rounded-2xl p-8 max-w-xl">

            {/* Quote Icon */}
            <FaQuoteLeft className="text-4xl text-teal-300 mb-4" />

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
               {opinion}
            </p>

            {/* Divider */}
            <div className="border-t border-dashed border-teal-300 my-6"></div>

            {/* User Info */}
            <div className="flex items-center gap-4">

                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-teal-900">
                    <img src={user_photoURL} alt="" />
                </div>

                {/* Name & Role */}
                <div>
                    <h3 className="font-semibold text-lg text-teal-900">
                       {userName}
                    </h3>
                    <p className="text-gray-500 text-sm">
                        Senior Product Designer
                        <p>ratings {ratings}</p>
                    </p>
                </div>
            </div>

        </div>
    );
};

export default ReviewCard;