import { useEffect, useState } from "react";
import { FaCheck, FaUserCircle } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import * as client from "../../Account/client";

export default function PeopleDetails() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [userRole, setUserRole] = useState("");
    const [loginId, setLoginId] = useState("");
    const [section, setSection] = useState("");
    const [totalActivity, setTotalActivity] = useState("");
    const [editing, setEditing] = useState(false);

    const saveUser = async () => {
        const [firstName, lastName] = name.split(" ");
        const updatedUser = {
            ...user,
            firstName,
            lastName,
            email: email || user.email,
            role: userRole || user.role,
            loginId: loginId || user.loginId,
            section: section || user.section,
            totalActivity: totalActivity || user.totalActivity
        };
        await client.updateUser(updatedUser);
        setUser(updatedUser);
        setEditing(false);
        navigate(-1);
    };

    const { uid } = useParams();
    const [user, setUser] = useState<any>({});
    const navigate = useNavigate();

    const deleteUser = async (uid: string) => {
        await client.deleteUser(uid);
        navigate(-1);
    };

    const fetchUser = async () => {
        if (!uid) return;
        const user = await client.findUserById(uid);
        setUser(user);
        setEmail(user.email || "");
        setUserRole(user.role || "");
        setLoginId(user.loginId || "");
        setSection(user.section || "");
        setTotalActivity(user.totalActivity || "");
    };

    useEffect(() => {
        if (uid) fetchUser();
    }, [uid]);

    if (!uid) return null;

    return (
        <div className="wd-people-details position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25">
            <button onClick={() => navigate(-1)} className="btn position-fixed end-0 top-0 wd-close-details">
                <IoCloseSharp className="fs-1" />
            </button>
            <div className="text-center mt-2">
                <FaUserCircle className="text-secondary me-2 fs-1" />
            </div>
            <hr />
            <div className="text-danger fs-4 wd-name">
                {!editing && (
                    <FaPencil
                        onClick={() => setEditing(true)}
                        className="float-end fs-5 mt-2 wd-edit"
                    />
                )}
                {editing && (
                    <FaCheck
                        onClick={() => saveUser()}
                        className="float-end fs-5 mt-2 me-2 wd-save"
                    />
                )}
                {!editing && (
                    <div className="wd-name" onClick={() => setEditing(true)}>
                        {user.firstName} {user.lastName}
                    </div>
                )}
                {user && editing && (
                    <input
                        className="form-control w-100 mb-3 wd-edit-name"
                        defaultValue={`${user.firstName} ${user.lastName}`}
                        onChange={(e) => setName(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                saveUser();
                            }
                        }}
                    />
                )}
            </div>

            <div className="mb-2">
                <b>Email:</b>
                {!editing ? (
                    <span className="ms-2">{user.email}</span>
                ) : (
                    <input
                        type="email"
                        className="form-control mt-1"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                )}
            </div>

            <div className="mb-2">
                <b>Role:</b>
                {!editing ? (
                    <span className="ms-2 wd-roles">{user.role}</span>
                ) : (
                    <select
                        className="form-select mt-1"
                        value={userRole}
                        onChange={(e) => setUserRole(e.target.value)}
                    >
                        <option value="STUDENT">Student</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="ADMIN">Admin</option>
                    </select>
                )}
            </div>

            <div className="mb-2">
                <b>Login ID:</b>
                {!editing ? (
                    <span className="ms-2 wd-login-id">{user.loginId}</span>
                ) : (
                    <input
                        type="text"
                        className="form-control mt-1"
                        value={loginId}
                        onChange={(e) => setLoginId(e.target.value)}
                    />
                )}
            </div>

            <div className="mb-2">
                <b>Section:</b>
                {!editing ? (
                    <span className="ms-2 wd-section">{user.section}</span>
                ) : (
                    <input
                        type="text"
                        className="form-control mt-1"
                        value={section}
                        onChange={(e) => setSection(e.target.value)}
                    />
                )}
            </div>

            <div className="mb-2">
                <b>Total Activity:</b>
                {!editing ? (
                    <span className="ms-2 wd-total-activity">{user.totalActivity}</span>
                ) : (
                    <input
                        type="text"
                        className="form-control mt-1"
                        value={totalActivity}
                        onChange={(e) => setTotalActivity(e.target.value)}
                    />
                )}
            </div>

            <hr />
            <button
                onClick={() => deleteUser(uid)}
                className="btn btn-danger float-end wd-delete"
            >
                Delete
            </button>
            <button
                onClick={() => navigate(-1)}
                className="btn btn-secondary float-start float-end me-2 wd-cancel"
            >
                Cancel
            </button>
        </div>
    );
}