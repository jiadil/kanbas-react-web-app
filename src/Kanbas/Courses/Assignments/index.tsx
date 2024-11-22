import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as client from "./client";
import { setAssignments, deleteAssignment } from "./reducer";
import AssignmentsControls from "./AssignmentsControls";
import AssignmentsTitleButtons from "./AssignmentsTitleButtons";
import AssignmentsListButtons from "./AssignmentsListButtons";
import DeleteAssignmentDialog from "./DeleteAssignmentDialog";
import { BsGripVertical } from "react-icons/bs";
import { PiNotePencil } from "react-icons/pi";
import { IoMdArrowDropdown } from "react-icons/io";
import FacultyRoute from "../../Account/FacultyRoute";

interface Assignment {
    _id: string;
    title: string;
    course: string;
    description: string;
    points: number;
    due: string;
    available: string;
    until: string;
}

export default function Assignments() {
    const dispatch = useDispatch();
    const { cid } = useParams();
    const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [selectedAssignmentId, setSelectedAssignmentId] = useState<string | null>(null);

    const fetchAssignments = async () => {
        try {
            const assignments = await client.findAssignmentsForCourse(cid as string);
            console.log("Fetched assignments:", assignments); // Add this for debugging
            dispatch(setAssignments(assignments));
        } catch (error) {
            console.error("Error fetching assignments:", error);
        }
    };

    useEffect(() => {
        if (cid) {
            fetchAssignments();
        }
    }, [cid]);

    console.log("Current assignments in render:", assignments);

    const confirmDeleteAssignment = (assignmentId: string) => {
        setSelectedAssignmentId(assignmentId);
        setShowDeleteDialog(true);
    };

    const handleDeleteAssignment = async () => {
        if (selectedAssignmentId) {
            try {
                await client.deleteAssignment(selectedAssignmentId);
                dispatch(deleteAssignment(selectedAssignmentId));
                setShowDeleteDialog(false);
                setSelectedAssignmentId(null);
            } catch (error) {
                console.error("Error deleting assignment:", error);
            }
        }
    };

    const handleCancelDelete = () => {
        setShowDeleteDialog(false);
        setSelectedAssignmentId(null);
    };

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        const formattedDate = date.toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            timeZone: "UTC",
            hour12: true
        });
        const [datePart, timePart] = formattedDate.split(", ");
        return `${datePart} at ${timePart}`;
    };

    return (
        <div id="wd-assignments">
            <AssignmentsControls /><br /><br />

            <div className="d-title d-flex justify-content-between align-items-center p-3 ps-2 bg-secondary">
                <div className="d-flex align-items-center fs-3">
                    <BsGripVertical className="me-2 fs-2" />
                    <IoMdArrowDropdown className="me-2 fs-2" />
                    <div id="wd-assignments-title" className="fs-4 fw-bolder">ASSIGNMENTS</div>
                </div>
                <AssignmentsTitleButtons />
            </div>

            <ul id="wd-assignment-list" className="list-group rounded-0">
                {assignments.map((assignment: Assignment) => (
                    <li key={assignment._id} className="wd-assignment-list-item list-group-item d-flex justify-content-between align-items-center p-0 fs-5 border-gray" style={{ borderLeft: "5px solid green" }}>
                        <div className="d-flex align-items-center col-10 me-2" style={{ flex: "1" }}>
                            <BsGripVertical className="me-1 ms-2 fs-3" style={{ color: "black", flexShrink: "0" }} />

                            <FacultyRoute>
                                <a className="wd-assignment-link d-flex align-items-center p-2" href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                                    <PiNotePencil className="fs-3" style={{ color: "green" }} />
                                </a>
                            </FacultyRoute>

                            <div className="pt-3 pb-3 ms-2">
                                <div><strong>{assignment.title}</strong></div>
                                <div>
                                    <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> {formatDate(assignment.available)} | <strong>Due</strong> {formatDate(assignment.due)} | {assignment.points} pts
                                </div>
                            </div>
                        </div>

                        <div className="d-flex align-items-center justify-content-end col-2">
                            <AssignmentsListButtons assignmentId={assignment._id} deleteAssignment={() => confirmDeleteAssignment(assignment._id)} />
                        </div>
                    </li>
                ))}
            </ul>
            
            <DeleteAssignmentDialog
                dialogTitle="Confirm Deletion"
                isVisible={showDeleteDialog}
                onConfirm={handleDeleteAssignment}
                onCancel={handleCancelDelete}
            />
        </div>
    );
}
