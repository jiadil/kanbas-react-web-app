import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import PeopleDetails from "./Details";
import { Link } from "react-router-dom";

// Define a User interface for better type safety
interface User {
    _id: string;
    firstName: string;
    lastName: string;
    loginId: string;
    section?: string;
    role: string;
    lastActivity?: string;
    totalActivity?: string;
}

interface PeopleTableProps {
    users?: User[];
}

export default function PeopleTable({ users = [] }: PeopleTableProps) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const isFaculty = currentUser?.role === "FACULTY";

    return (
        <div id="wd-people-table">
            <PeopleDetails />
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Login ID</th>
                        <th>Role</th>
                        {isFaculty && <th>Actions</th>}
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td className="wd-full-name text-nowrap">
                                <Link to={`/Kanbas/Account/Users/${user._id}`} className="text-decoration-none">
                                    <FaUserCircle className="me-2 fs-1 text-secondary" />
                                    <span className="wd-first-name">{user.firstName}</span>{" "}
                                    <span className="wd-last-name">{user.lastName}</span>
                                </Link>
                            </td>
                            <td className="wd-login-id">{user.loginId}</td>
                            <td className="wd-role">{user.role}</td>
                            {isFaculty && (
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => {
                                            // Handle remove action if needed
                                            console.log("Remove user:", user._id);
                                        }}
                                    >
                                        Remove
                                    </button>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}