export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor" className="container mt-3">
            <form>
                <div className="mb-3">
                    <label htmlFor="wd-name" className="form-label">Assignment Name</label>
                    <input id="wd-name" defaultValue="A1 - ENV + HTML" className="form-control" />
                </div>

                <div className="mb-3">
                    <label htmlFor="wd-description" className="form-label"></label>
                    <textarea id="wd-description" cols={30} rows={5} className="form-control" defaultValue={`The assignment is available online.`} />
                </div>

                <div className="row align-items-start mb-3">
                    <div className="col-3 text-end">
                        <label htmlFor="wd-points" className="form-label pt-1">Points</label>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" id="wd-points" defaultValue="100" />
                    </div>
                </div>

                <div className="row align-items-start mb-3">
                    <div className="col-3 text-end">
                        <label htmlFor="wd-group" className="form-label pt-1">Assignment Group</label>
                    </div>
                    <div className="col">
                        <select id="wd-group" className="form-select">
                            <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option value="PROJECTS">PROJECTS</option>
                            <option value="EXAMS">EXAMS</option>
                        </select>
                    </div>
                </div>

                <div className="row align-items-start mb-3">
                    <div className="col-3 text-end">
                        <label htmlFor="wd-display-grade-as" className="form-label pt-1">Display Grade As</label>
                    </div>
                    <div className="col">
                        <select id="wd-display-grade-as" className="form-select">
                            <option selected value="PERCENTAGE">Percentage</option>
                            <option value="LETTER_GRADE">Letter Grade</option>
                            <option value="GPA">GPA</option>
                        </select>
                    </div>
                </div>

                <div className="row align-items-start mb-3">
                    <div className="col-3 text-end">
                        <label htmlFor="wd-submission-type" className="form-label pt-1">Submission Type</label>
                    </div>
                    <div className="col ps-3 pe-3">
                        <div className="col border p-3">
                            <select id="wd-submission-type" className="form-select">
                                <option selected value="ONLINE">Online</option>
                                <option value="ON_PAPER">On Paper</option>
                                <option value="TAKE_HOME">Take Home</option>
                            </select>

                            <div className="mt-3">
                                <label className="mb-3"><strong>Online Entry Options</strong></label>
                                <div className="form-check mb-3">
                                    <input type="checkbox" id="wd-text-entry" className="form-check-input" />
                                    <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
                                </div>
                                <div className="form-check mb-3">
                                    <input type="checkbox" id="wd-website-url" className="form-check-input" />
                                    <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
                                </div>
                                <div className="form-check mb-3">
                                    <input type="checkbox" id="wd-media-recordings" className="form-check-input" />
                                    <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
                                </div>
                                <div className="form-check mb-3">
                                    <input type="checkbox" id="wd-student-annotation" className="form-check-input" />
                                    <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label>
                                </div>
                                <div className="form-check mb-3">
                                    <input type="checkbox" id="wd-file-upload" className="form-check-input" />
                                    <label htmlFor="wd-file-upload" className="form-check-label">File Uploads</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row align-items-start mb-3">
                    <div className="col-3 text-end">
                        <label htmlFor="wd-assign-to" className="form-label pt-1">Assign</label>
                    </div>

                    <div className="col ps-3 pe-3">
                        <div className="col border p-3">
                            <div className="mb-3">
                                <label htmlFor="wd-assign-to" className="form-label pt-1"><strong>Assign To</strong></label>
                                <input type="text" className="form-control" id="wd-assign-to" defaultValue="Everyone" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="wd-due-date" className="form-label pt-1"><strong>Due</strong></label>
                                <input type="date" className="form-control" id="wd-due-date" defaultValue="2024-09-30" />
                            </div>

                            <div className="row mb-3">
                                <div className="col">
                                    <label htmlFor="wd-available-from" className="form-label pt-1"><strong>Available From</strong></label>
                                    <input type="date" className="form-control" id="wd-available-from" defaultValue="2024-09-01" />
                                </div>
                                <div className="col">
                                    <label htmlFor="wd-available-until" className="form-label pt-1"><strong>Until</strong></label>
                                    <input type="date" className="form-control" id="wd-available-until" defaultValue="2024-09-30" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr />
                <div className="text-end">
                    <a href="#/Kanbas/Courses/1234/Assignments" className="btn btn-secondary me-2">Cancel</a>
                    <button type="submit" className="btn btn-primary">Save</button>
                </div>
            </form>
        </div>
    );
}
