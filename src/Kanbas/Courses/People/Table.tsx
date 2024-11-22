import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import * as client from "./client";
import { useSelector } from "react-redux";

export default function PeopleTable() {
    const { cid } = useParams();
    const [users, setUsers] = useState<any[]>([]);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const isFaculty = currentUser?.role === "FACULTY";

    const fetchUsers = async () => {
        try {
            if (cid) {
                const users = await client.findUsersInCourse(cid);
                setUsers(users);
            }
        } catch (error) {
            console.error("Error loading course users:", error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, [cid]);

    const removeUser = async (userId: string) => {
        try {
            if (cid) {
                await client.removeUserFromCourse(cid, userId);
                await fetchUsers();  // Refresh the list
            }
        } catch (error) {
            console.error("Error removing user:", error);
        }
    };

    return (
        <div id="wd-people-table">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Login ID</th>
                        <th>Section</th>
                        <th>Role</th>
                        <th>Last Activity</th>
                        <th>Total Activity</th>
                        {isFaculty && <th>Actions</th>}
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td className="wd-full-name text-nowrap">
                                <FaUserCircle className="me-2 fs-1 text-secondary" />
                                <span className="wd-first-name">{user.firstName}</span>
                                <span className="wd-last-name">{user.lastName}</span>
                            </td>
                            <td className="wd-login-id">{user.loginId}</td>
                            <td className="wd-section">{user.section}</td>
                            <td className="wd-role">{user.role}</td>
                            <td className="wd-last-activity">{user.lastActivity}</td>
                            <td className="wd-total-activity">{user.totalActivity}</td>
                            {isFaculty && (
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => removeUser(user._id.toString())}
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