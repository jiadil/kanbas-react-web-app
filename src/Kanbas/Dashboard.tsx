import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import FacultyRoute from "./Account/FacultyRoute";
import StudentRoute from "./Account/StudentRoute";

interface Enrollment {
    _id: string;
    user: string;
    course: string;
}

export default function Dashboard(
    { courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }:
        {
            courses: any[]; course: any; setCourse: (course: any) => void;
            addNewCourse: () => void; deleteCourse: (course: any) => void;
            updateCourse: () => void;
        }
) {
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments, showAllCourses } = useSelector((state: any) => state.enrollmentReducer);

    const toggleShowAll = () => {
        dispatch({
            type: "set-show-all-courses",
            payload: !showAllCourses
        });
    };

    const toggleEnrollment = (courseId: string) => {
        const existingEnrollment = enrollments.find(
            (e: Enrollment) => e.user === currentUser._id && e.course === courseId
        );

        if (existingEnrollment) {
            dispatch({
                type: "remove-enrollment",
                payload: { userId: currentUser._id, courseId }
            });
        } else {
            dispatch({
                type: "add-enrollment",
                payload: { userId: currentUser._id, courseId }
            });
        }
    };

    const isEnrolled = (courseId: string) => {
        return enrollments.some(
            (e: Enrollment) => e.user === currentUser._id && e.course === courseId
        );
    };

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />

            <FacultyRoute>
                <h5>New Course
                    <button className="btn btn-primary float-end" id="wd-add-new-course-click" onClick={addNewCourse} >Add</button>
                    <button className="btn btn-warning float-end me-2" onClick={updateCourse} id="wd-update-course-click">Update</button>
                </h5><br />
                <input value={course.name} className="form-control mb-2" onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                <textarea value={course.description} className="form-control mb-3" onChange={(e) => setCourse({ ...course, description: e.target.value })} />
            </FacultyRoute>

            <StudentRoute>
                <h5>Enrollments
                    <button
                        className="btn btn-primary float-end"
                        onClick={toggleShowAll}
                    >
                        {showAllCourses ? "My Courses" : "Enrollments"}
                    </button>
                </h5>
                <br />
            </StudentRoute>

            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses
                        .map((course) => (
                            <div key={course._id} className="wd-dashboard-course col" style={{ width: "300px" }}>
                                <div className="card rounded-3 overflow-hidden">
                                    <Link to={`/Kanbas/Courses/${course._id}/Home`}
                                        className="wd-dashboard-course-link text-decoration-none text-dark" 
                                        onClick={(e) => {
                                            if (currentUser.role === "STUDENT" && !isEnrolled(course._id)) {
                                                e.preventDefault();
                                                alert("You must be enrolled in this course to view it.");
                                                return;
                                            }
                                        }}
                                    >
                                        <img
                                            src={`/images/${course._id}.jpg`}
                                            width="100%"
                                            height={160}
                                            alt={course.name}
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.src = "/images/stacked.jpg";
                                            }}
                                        />
                                        <div className="card-body">
                                            <h5 className="wd-dashboard-course-title card-title">
                                                {course.name} </h5>
                                            <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                                                {course.description} </p>
                                            <button className="btn btn-primary"> Go </button>

                                            <FacultyRoute>
                                                <button className="btn btn-danger float-end" id="wd-delete-course-click"
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        deleteCourse(course._id);
                                                    }}
                                                >
                                                    Delete
                                                </button>
                                                <button id="wd-edit-course-click" className="btn btn-warning me-2 float-end"
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        setCourse(course);
                                                    }}
                                                >
                                                    Edit
                                                </button>
                                            </FacultyRoute>

                                            <StudentRoute>
                                                <button
                                                    className={`btn float-end ${showAllCourses ? (
                                                            isEnrolled(course._id) ? 'btn-danger' : 'btn-success'
                                                        ) : 'd-none'
                                                        }`}
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        event.stopPropagation();
                                                        toggleEnrollment(course._id);
                                                    }}
                                                >
                                                    {showAllCourses ? (
                                                        isEnrolled(course._id) ? 'Unenroll' : 'Enroll'
                                                    ) : ''}
                                                </button>
                                            </StudentRoute>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}
