import AssignmentsControls from "./AssignmentsControls";
import AssignmentsTitleButtons from "./AssignmentsTitleButtons";
import AssignmentsListButtons from "./AssignmentsListButtons";
import { BsGripVertical } from "react-icons/bs";
import { PiNotePencil } from "react-icons/pi";
import { IoMdArrowDropdown } from "react-icons/io";

import { useParams } from "react-router";
import * as db from "../../Database";
export default function Assignments() {
    const { cid } = useParams();
    const { assignments } = db;

    const filteredAssignments = assignments.filter(assignment => assignment.course === cid);

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
                {filteredAssignments.map((assignment) => (
                    <li key={assignment._id} className="wd-assignment-list-item list-group-item d-flex justify-content-between align-items-center p-0 fs-5 border-gray" style={{ borderLeft: "5px solid green" }}>
                        <div className="d-flex align-items-center col-10 me-2" style={{ flex: "1" }}>
                            <BsGripVertical className="me-1 ms-2 fs-3" style={{ color: "black", flexShrink: "0" }} />
                            <a className="wd-assignment-link d-flex align-items-center p-2 me-2" href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                                <PiNotePencil className="fs-3" style={{ color: "green" }} />
                            </a>

                            <div className="pt-3 pb-3">
                                <div><strong>{assignment.title}</strong></div>
                                <div>
                                    <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> Sep 1 at 12:00am | <strong>Due</strong> Sep 30 at 11:59pm | 100 pts
                                </div>
                            </div>
                        </div>

                        <div className="d-flex align-items-center justify-content-end col-2">
                            <AssignmentsListButtons />
                        </div>
                    </li>
                ))}
                {/* <li className="wd-assignment-list-item list-group-item d-flex justify-content-between align-items-center p-0 fs-5 border-gray" style={{ borderLeft: "5px solid green" }}>
                    <div className="d-flex align-items-center col-10 me-2" style={{ flex: "1" }}>
                        <BsGripVertical className="me-1 ms-2 fs-3" style={{color: "black", flexShrink: "0" }} />
                        <a className="wd-assignment-link d-flex align-items-center p-2 me-2" href="#/Kanbas/Courses/1234/Assignments/1">
                            <PiNotePencil className="fs-3" style={{ color: "green" }} />
                        </a>

                        <div className="pt-3 pb-3">
                            <div><strong>A1</strong></div>
                            <div>
                                <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 6 at 12:00am | <strong>Due</strong> May 13 at 11:59pm | 100 pts
                            </div>
                        </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-end col-2">
                        <AssignmentsListButtons />
                    </div>
                </li>

                <li className="wd-assignment-list-item list-group-item d-flex justify-content-between align-items-center p-0 fs-5 border-gray" style={{ borderLeft: "5px solid green" }}>
                    <div className="d-flex align-items-center col-10 me-2" style={{ flex: "1" }}>
                        <BsGripVertical className="me-1 ms-2 fs-3" style={{color: "black", flexShrink: "0" }} />
                        <a className="wd-assignment-link d-flex align-items-center p-2 me-2" href="#/Kanbas/Courses/1234/Assignments/2">
                            <PiNotePencil className="fs-3" style={{ color: "green" }} />
                        </a>

                        <div className="pt-3 pb-3">
                            <div><strong>A2</strong></div>
                            <div>
                                <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 16 at 12:00am | <strong>Due</strong> May 23 at 11:59pm | 100 pts
                            </div>
                        </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-end col-2">
                        <AssignmentsListButtons />
                    </div>
                </li>

                <li className="wd-assignment-list-item list-group-item d-flex justify-content-between align-items-center p-0 fs-5 border-gray" style={{ borderLeft: "5px solid green" }}>
                    <div className="d-flex align-items-center col-10 me-2" style={{ flex: "1" }}>
                        <BsGripVertical className="me-1 ms-2 fs-3" style={{color: "black", flexShrink: "0" }} />
                        <a className="wd-assignment-link d-flex align-items-center p-2 me-2" href="#/Kanbas/Courses/1234/Assignments/3">
                            <PiNotePencil className="fs-3" style={{ color: "green" }} />
                        </a>

                        <div className="pt-3 pb-3">
                            <div><strong>A3</strong></div>
                            <div>
                                <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 26 at 12:00am | <strong>Due</strong> May 30 at 11:59pm | 100 pts
                            </div>
                        </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-end col-2">
                        <AssignmentsListButtons />
                    </div>
                </li> */}
            </ul>
        </div>
    );
}
