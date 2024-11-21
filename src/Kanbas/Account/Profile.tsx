import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import * as client from "./client";
export default function Profile() {
    const [profile, setProfile] = useState<any>({});
    const [alert, setAlert] = useState<{ type: string; message: string } | null>(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const updateProfile = async () => {
        try {
            const updatedProfile = await client.updateUser(profile);
            dispatch(setCurrentUser(updatedProfile));
            setAlert({ type: "success", message: "Profile updated successfully!" });
            setTimeout(() => setAlert(null), 3000); // Clear alert after 3 seconds
        } catch (error) {
            setAlert({ type: "danger", message: "Error updating profile. Please try again." });
            setTimeout(() => setAlert(null), 3000);
        }
    };

    const fetchProfile = () => {
        if (!currentUser) return navigate("/Kanbas/Account/Signin");
        setProfile(currentUser);
    };
    const signout = async () => {
        await client.signout();
        dispatch(setCurrentUser(null));
        navigate("/Kanbas/Account/Signin");
    };

    useEffect(() => { fetchProfile(); }, []);
    return (
        <div className="wd-profile-screen">
            <h3>Profile</h3>
            {alert && (
                <div className={`alert alert-${alert.type} mb-2`} role="alert">
                    {alert.message}
                </div>
            )}
            {profile && (
                <div>
                    <div className="mb-2">
                        <label htmlFor="wd-username" className="form-label">Username</label>
                        <input
                            defaultValue={profile.username}
                            id="wd-username"
                            className="form-control"
                            onChange={(e) => setProfile({ ...profile, username: e.target.value })}
                        />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="wd-password" className="form-label">Password</label>
                        <input
                            defaultValue={profile.password}
                            id="wd-password"
                            className="form-control"
                            onChange={(e) => setProfile({ ...profile, password: e.target.value })}
                        />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="wd-firstname" className="form-label">First Name</label>
                        <input
                            defaultValue={profile.firstName}
                            id="wd-firstname"
                            className="form-control"
                            onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                        />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="wd-lastname" className="form-label">Last Name</label>
                        <input
                            defaultValue={profile.lastName}
                            id="wd-lastname"
                            className="form-control"
                            onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
                        />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="wd-dob" className="form-label">Date of Birth</label>
                        <input
                            defaultValue={profile.dob?.split('T')[0]}
                            id="wd-dob"
                            className="form-control"
                            onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
                            type="date"
                        />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="wd-email" className="form-label">Email</label>
                        <input
                            defaultValue={profile.email}
                            id="wd-email"
                            className="form-control"
                            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                        />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="wd-role" className="form-label">Role</label>
                        <select
                            value={profile.role}
                            onChange={(e) => setProfile({ ...profile, role: e.target.value })}
                            className="form-control"
                            id="wd-role"
                        >
                            <option value="USER">User</option>
                            <option value="ADMIN">Admin</option>
                            <option value="FACULTY">Faculty</option>
                            <option value="STUDENT">Student</option>
                        </select>
                    </div>

                    <button onClick={updateProfile} className="btn btn-primary w-100 mb-2"> Update </button>
                    <button onClick={signout} className="btn btn-danger w-100 mb-2" id="wd-signout-btn"> Sign out </button>
                </div>
            )}
        </div>);
}
