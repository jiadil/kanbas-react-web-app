import React, { useState } from "react";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10",
        completed: false,
        score: 0,
    });

    const [module, setModule] = useState({
        id: "MD101",
        name: "Web Development",
        description: "Introduction to Full Stack Development",
        course: "CS5610"
    });

    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
    const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;

    return (
        <div>
            <h3 id="wd-working-with-objects">Working With Objects</h3>

            {/* Assignment Section */}
            <h4>Assignment</h4>
            <div className="mb-4">
                <h5>Update Title</h5>
                <input
                    className="form-control w-75"
                    id="wd-assignment-title"
                    value={assignment.title}
                    onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
                />
                <a
                    id="wd-update-assignment-title"
                    className="btn btn-primary mt-2"
                    href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
                >
                    Update Title
                </a>
            </div>

            <div className="mb-4">
                <h5>Update Score</h5>
                <input
                    type="number"
                    className="form-control w-75"
                    value={assignment.score}
                    onChange={(e) => setAssignment({ ...assignment, score: parseInt(e.target.value) })}
                />
                <a
                    className="btn btn-primary mt-2"
                    href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
                >
                    Update Score
                </a>
            </div>

            <div className="mb-4">
                <h5>Update Completed Status</h5>
                <div className="form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        checked={assignment.completed}
                        onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })}
                    />
                    <label className="form-check-label">Completed</label>
                </div>
                <a
                    className="btn btn-primary mt-2"
                    href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
                >
                    Update Completed Status
                </a>
            </div>

            {/* Module Section */}
            <h4>Module</h4>
            <div className="mb-4">
                <h5>Update Name</h5>
                <input
                    className="form-control w-75"
                    value={module.name}
                    onChange={(e) => setModule({ ...module, name: e.target.value })}
                />
                <a
                    className="btn btn-primary mt-2"
                    href={`${MODULE_API_URL}/name/${module.name}`}
                >
                    Update Name
                </a>
            </div>

            <div className="mb-4">
                <h5>Update Description</h5>
                <input
                    className="form-control w-75"
                    value={module.description}
                    onChange={(e) => setModule({ ...module, description: e.target.value })}
                />
                <a
                    className="btn btn-primary mt-2"
                    href={`${MODULE_API_URL}/description/${module.description}`}
                >
                    Update Description
                </a>
            </div>

            <hr />

            <h4>Retrieving Data</h4>
            <div>
                <a
                    id="wd-retrieve-assignments"
                    className="btn btn-primary me-2"
                    href={`${ASSIGNMENT_API_URL}`}
                >
                    Get Assignment
                </a>
                <a
                    id="wd-retrieve-assignment-title"
                    className="btn btn-primary me-2"
                    href={`${ASSIGNMENT_API_URL}/title`}
                >
                    Get Assignment Title
                </a>
                <a
                    className="btn btn-primary me-2"
                    href={`${MODULE_API_URL}`}
                >
                    Get Module
                </a>
                <a
                    className="btn btn-primary me-2"
                    href={`${MODULE_API_URL}/name`}
                >
                    Get Module Name
                </a>
            </div>
        </div>
    );
}