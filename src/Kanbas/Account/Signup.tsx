import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
export default function Signup() {
    const [user, setUser] = useState<any>({});
    const [alert, setAlert] = useState<{ type: string; message: string } | null>(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const signup = async () => {
        try {
            if (!user.username || !user.password) {
                setAlert({
                    type: "danger",
                    message: "Username and password are required"
                });
                return;
            }

            console.log("Attempting signup with:", user); // Debug log
            const currentUser = await client.signup(user);
            console.log("Signup response:", currentUser); // Debug log

            dispatch(setCurrentUser(currentUser));
            setAlert({
                type: "success",
                message: "Successfully signed up!"
            });
            setTimeout(() => {
                navigate("/Kanbas/Account/Profile");
            }, 1000);

        } catch (error: any) {
            console.error("Signup error:", error); // Debug log
            const errorMessage = error.response?.data?.message || "Error signing up. Please try again.";
            setAlert({
                type: "danger",
                message: errorMessage
            });
        }
    };

    return (
        <div className="wd-signup-screen">
            <h1>Sign up</h1>

            {alert && (
                <div className={`alert alert-${alert.type} mb-2`} role="alert">
                    {alert.message}
                </div>
            )}

            <input
                value={user.username || ''}
                onChange={(e) => setUser({ ...user, username: e.target.value.trim() })}
                className="form-control mb-2"
                placeholder="username"
            />
            <input
                value={user.password || ''}
                onChange={(e) => setUser({ ...user, password: e.target.value.trim() })}
                type="password"
                className="form-control mb-2"
                placeholder="password"
            />
            <button
                onClick={signup}
                className="btn btn-primary mb-2 w-100"
            >
                Sign up
            </button>
            <Link to="/Kanbas/Account/Signin">Sign in</Link>
        </div>
    );
}
