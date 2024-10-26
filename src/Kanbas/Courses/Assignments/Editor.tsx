// import { Link, useParams } from "react-router-dom";
// import * as db from "../../Database";

// export default function AssignmentEditor() {
//     const { cid, aid } = useParams();
//     const assignment = db.assignments.find(a => a._id === aid);

//     if (!assignment) {
//         return <div>Assignment not found</div>;
//     }

//     return (
//         <div id="wd-assignments-editor" className="container mt-3">
//             <form>
//                 <div className="mb-2">
//                     <label htmlFor="wd-name" className="form-label">Assignment Name</label>
//                     <input id="wd-name" defaultValue={assignment.title} className="form-control" />
//                 </div>

//                 <div className="mb-3">
//                     <label htmlFor="wd-description" className="form-label"></label>
//                     <textarea id="wd-description" cols={30} rows={5} className="form-control" defaultValue={assignment.description} />
//                 </div>

//                 <div className="row align-items-start mb-3">
//                     <div className="col-3 text-end">
//                         <label htmlFor="wd-points" className="form-label pt-1">Points</label>
//                     </div>
//                     <div className="col">
//                         <input type="text" className="form-control" id="wd-points" defaultValue={assignment.points} />
//                     </div>
//                 </div>

//                 <div className="row align-items-start mb-3">
//                     <div className="col-3 text-end">
//                         <label htmlFor="wd-group" className="form-label pt-1">Assignment Group</label>
//                     </div>
//                     <div className="col">
//                         <select id="wd-group" className="form-select">
//                             <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
//                             <option value="PROJECTS">PROJECTS</option>
//                             <option value="EXAMS">EXAMS</option>
//                         </select>
//                     </div>
//                 </div>

//                 <div className="row align-items-start mb-3">
//                     <div className="col-3 text-end">
//                         <label htmlFor="wd-display-grade-as" className="form-label pt-1">Display Grade As</label>
//                     </div>
//                     <div className="col">
//                         <select id="wd-display-grade-as" className="form-select">
//                             <option selected value="PERCENTAGE">Percentage</option>
//                             <option value="LETTER_GRADE">Letter Grade</option>
//                             <option value="GPA">GPA</option>
//                         </select>
//                     </div>
//                 </div>

//                 <div className="row align-items-start mb-3">
//                     <div className="col-3 text-end">
//                         <label htmlFor="wd-submission-type" className="form-label pt-1">Submission Type</label>
//                     </div>
//                     <div className="col ps-3 pe-3">
//                         <div className="col border p-3">
//                             <select id="wd-submission-type" className="form-select">
//                                 <option selected value="ONLINE">Online</option>
//                                 <option value="ON_PAPER">On Paper</option>
//                                 <option value="TAKE_HOME">Take Home</option>
//                             </select>

//                             <div className="mt-3">
//                                 <label className="mb-3"><strong>Online Entry Options</strong></label>
//                                 <div className="form-check mb-3">
//                                     <input type="checkbox" id="wd-text-entry" className="form-check-input" />
//                                     <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
//                                 </div>
//                                 <div className="form-check mb-3">
//                                     <input type="checkbox" id="wd-website-url" className="form-check-input" />
//                                     <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
//                                 </div>
//                                 <div className="form-check mb-3">
//                                     <input type="checkbox" id="wd-media-recordings" className="form-check-input" />
//                                     <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
//                                 </div>
//                                 <div className="form-check mb-3">
//                                     <input type="checkbox" id="wd-student-annotation" className="form-check-input" />
//                                     <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label>
//                                 </div>
//                                 <div className="form-check mb-3">
//                                     <input type="checkbox" id="wd-file-upload" className="form-check-input" />
//                                     <label htmlFor="wd-file-upload" className="form-check-label">File Uploads</label>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="row align-items-start mb-3">
//                     <div className="col-3 text-end">
//                         <label htmlFor="wd-assign-to" className="form-label pt-1">Assign</label>
//                     </div>

//                     <div className="col ps-3 pe-3">
//                         <div className="col border p-3">
//                             <div className="mb-3">
//                                 <label htmlFor="wd-assign-to" className="form-label pt-1"><strong>Assign To</strong></label>
//                                 <input type="text" className="form-control" id="wd-assign-to" defaultValue="Everyone" />
//                             </div>

//                             <div className="mb-3">
//                                 <label htmlFor="wd-due-date" className="form-label pt-1"><strong>Due</strong></label>
//                                 <input type="datetime-local" className="form-control" id="wd-due-date" defaultValue={assignment.due ? assignment.due.slice(0, 16) : ""} />
//                             </div>

//                             <div className="row mb-3">
//                                 <div className="col">
//                                     <label htmlFor="wd-available-from" className="form-label pt-1"><strong>Available From</strong></label>
//                                     <input type="datetime-local" className="form-control" id="wd-available-from" defaultValue={assignment.available ? assignment.available.slice(0, 16) : ""} />
//                                 </div>
//                                 <div className="col">
//                                     <label htmlFor="wd-available-until" className="form-label pt-1"><strong>Until</strong></label>
//                                     <input type="datetime-local" className="form-control" id="wd-available-until" defaultValue={assignment.until ? assignment.until.slice(0, 16) : ""} />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <hr />
//                 <div className="text-end">
//                     <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">Cancel</Link>
//                     <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-danger">Save</Link>
//                 </div>
//             </form>
//         </div>
//     );
// }


import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);

    const [assignment, setAssignment] = useState({
        _id: "",
        title: "",
        course: cid,
        description: "",
        points: 100,
        due: "",
        available: "",
        until: ""
    });

    useEffect(() => {
        if (aid && aid !== "new") {
            const existingAssignment = assignments.find((a: any) => a._id === aid);
            if (existingAssignment) {
                setAssignment(existingAssignment);
            }
        }
    }, [aid, assignments]);

    const handleSave = () => {
        if (aid === "new") {
            dispatch(addAssignment({ ...assignment, _id: new Date().getTime().toString() }));
        } else {
            dispatch(updateAssignment(assignment));
        }
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };

    return (
        <div id="wd-assignments-editor" className="container mt-3">
            <form>
                <div className="mb-2">
                    <label htmlFor="wd-name" className="form-label">Assignment Name</label>
                    <input
                        id="wd-name"
                        value={assignment.title}
                        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="wd-description" className="form-label">Description</label>
                    <textarea
                        id="wd-description"
                        value={assignment.description}
                        onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
                        className="form-control"
                        rows={5}
                    />
                </div>

                <div className="row align-items-start mb-3">
                    <div className="col-3 text-end">
                        <label htmlFor="wd-points" className="form-label pt-1">Points</label>
                    </div>
                    <div className="col">
                        <input
                            type="number"
                            id="wd-points"
                            value={assignment.points}
                            onChange={(e) => setAssignment({ ...assignment, points: parseInt(e.target.value) })}
                            className="form-control"
                        />
                    </div>
                </div>

                {/* ... keep other form fields ... */}

                <div className="row align-items-start mb-3">
                    <div className="col">
                        <label htmlFor="wd-due-date" className="form-label pt-1">Due Date</label>
                        <input
                            type="datetime-local"
                            id="wd-due-date"
                            value={assignment.due?.split('Z')[0]}
                            onChange={(e) => setAssignment({ ...assignment, due: e.target.value + 'Z' })}
                            className="form-control"
                        />
                    </div>
                    <div className="col">
                        <label htmlFor="wd-available-from">Available From</label>
                        <input
                            type="datetime-local"
                            id="wd-available-from"
                            value={assignment.available?.split('Z')[0]}
                            onChange={(e) => setAssignment({ ...assignment, available: e.target.value + 'Z' })}
                            className="form-control"
                        />
                    </div>
                    <div className="col">
                        <label htmlFor="wd-until">Until</label>
                        <input
                            type="datetime-local"
                            id="wd-until"
                            value={assignment.until?.split('Z')[0]}
                            onChange={(e) => setAssignment({ ...assignment, until: e.target.value + 'Z' })}
                            className="form-control"
                        />
                    </div>
                </div>

                <hr />
                <div className="text-end">
                    <button
                        type="button"
                        onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments`)}
                        className="btn btn-secondary me-2">
                        Cancel
                    </button>
                    <button
                        type="button"
                        onClick={handleSave}
                        className="btn btn-danger">
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}