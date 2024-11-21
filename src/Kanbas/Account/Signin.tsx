import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import * as db from "../Database";

import * as client from "./client";

export default function Signin() {
    const [credentials, setCredentials] = useState<any>({});
    const [alert, setAlert] = useState<{ type: string; message: string } | null>(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const signin = async () => {
        try {
            const user = await client.signin(credentials);
            if (!user) {
                setAlert({ type: "danger", message: "Invalid credentials. Please try again." });
                setTimeout(() => setAlert(null), 3000);
                return;
            }
            dispatch(setCurrentUser(user));
            setAlert({ type: "success", message: "Successfully signed in!" });
            setTimeout(() => {
                setAlert(null);
                navigate("/Kanbas/Dashboard");
            }, 1000);
        } catch (error) {
            setAlert({ type: "danger", message: "Error signing in. Please try again." });
            setTimeout(() => setAlert(null), 3000);
        }
    };

    return (
        <div id="wd-signin-screen">
            <h3>Sign in</h3>
            {alert && (
                <div className={`alert alert-${alert.type} mb-2`} role="alert">
                    {alert.message}
                </div>
            )}
            
            <input defaultValue={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                className="form-control mb-2" placeholder="username" id="wd-username" />
            <input defaultValue={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                className="form-control mb-2" placeholder="password" type="password" id="wd-password" />
            <button onClick={signin} id="wd-signin-btn" className="btn btn-primary w-100" > Sign in </button>
            <Link id="wd-signup-link" to="/Kanbas/Account/Signup"> Sign up </Link>
        </div>
    );
}
