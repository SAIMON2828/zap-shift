// import React from 'react';

import { useState } from "react";
import useAuth from "../../../Hookes/useAuth";
import { Link } from "react-router";

const ForgetPassword = () => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("idle");
    const [errorMsg, setErrorMsg] = useState("");

    const { forgetPassword } = useAuth();

    const getErrorMessage = (code) => {
        const errors = {
            "auth/user-not-found": "No account for this email",
            "auth/invalid-email": "Email format is not right",
            "auth/too-many-requests": "So many attempts are made, try later",
        };
        return errors[code] || "Error occur, try again";
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMsg("");

        try {
            await forgetPassword(email);
            setStatus("sent");
        } catch (err) {
            setStatus("error");
            setErrorMsg(getErrorMessage(err.code));
        }
    };


    if (status === "sent") {
        return (
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body text-center">
                    <h2 className="text-2xl font-bold text-success">
                        Email Sent
                    </h2>

                    <p>
                        Password reset link sent to <br />
                        <span className="font-semibold">{email}</span>
                    </p>

                    <p className="text-sm text-gray-500">
                        Check inbox or spam folder
                    </p>

                    <Link className="btn btn-neutral mt-4" to="/login">
                        Back to Login
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h2 className="text-1xl font-bold mb-1"> Forget Password </h2>
                        <p className="text-1xl mb-1">send your email, reset link will be provided।</p>

                        {status === "error" && <p style={{ color: "red" }}>{errorMsg}</p>}
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input
                                type="email"
                                placeholder="Enter Your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={status === "loading"}
                                required
                                className="input"
                            />
                            <button type="submit" disabled={status === "loading" || !email} className="btn btn-neutral mt-4">
                                {status === "loading" ? "sending..." : "Reset link send"}
                            </button>
                            <p>
                                remember password? <Link to="/login">Login</Link>
                            </p>
                        </fieldset>
                    </div>
                </div>

            </form>
        </div>
    );

};

export default ForgetPassword;