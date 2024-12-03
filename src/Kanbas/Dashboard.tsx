import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import * as db from "./Database";
import FacultyRoute from "./Account/FacultyRoute";
import StudentRoute from "./Account/StudentRoute";
import { addEnrollment, removeEnrollment, setShowAllCourses, setEnrollments } from "./Courses/Enrollments/reducer";
import enrollmentClient from "./Courses/Enrollments/client";
import courseClient from "./Courses/client";

interface Enrollment {
    _id: string;
    course: string;
    user: string;
    status: string;
}

export default function Dashboard(
    { courses, course, setCourse, addNewCourse, deleteCourse, updateCourse, fetchCourses, setCourses }:
        {
            courses: any[];
            course: any;
            setCourse: (course: any) => void;
            addNewCourse: () => void;
            deleteCourse: (course: any) => void;
            updateCourse: () => void;
            fetchCourses: (showAll: boolean) => Promise<void>;
            setCourses: (courses: any[]) => void;
        }
) {
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments, showAllCourses } = useSelector((state: any) => state.enrollmentReducer);

    const toggleShowAll = async () => {
        dispatch(setShowAllCourses(!showAllCourses));
        await fetchCourses(!showAllCourses);
    };

    useEffect(() => {
        const loadData = async () => {
            if (currentUser?._id) {
                try {
                    const enrollmentData = await enrollmentClient.findUserEnrollments(currentUser._id);
                    dispatch(setEnrollments(enrollmentData));

                    const courses = showAllCourses ?
                        await courseClient.fetchAllCourses() :
                        await courseClient.fetchEnrolledCourses();
                    setCourses(courses);
                } catch (error) {
                    console.error("Error loading data:", error);
                }
            }
        };
        loadData();
    }, [currentUser, showAllCourses]);

    const toggleEnrollment = async (courseId: string) => {
        try {
            if (isEnrolled(courseId)) {
                await enrollmentClient.unenrollFromCourse(currentUser._id, courseId);
                // Get fresh enrollment data after unenrolling
                const newEnrollmentData = await enrollmentClient.findUserEnrollments(currentUser._id);
                dispatch(setEnrollments(newEnrollmentData));
            } else {
                const enrollment = await enrollmentClient.enrollInCourse(currentUser._id, courseId);
                // Get fresh enrollment data after enrolling
                const newEnrollmentData = await enrollmentClient.findUserEnrollments(currentUser._id);
                dispatch(setEnrollments(newEnrollmentData));
            }

            // Reload courses after enrollment change
            const courses = showAllCourses ?
                await courseClient.fetchAllCourses() :
                await courseClient.fetchEnrolledCourses();
            setCourses(courses);
        } catch (error) {
            console.error("Error toggling enrollment:", error);
        }
    };

    const isEnrolled = (courseId: string) => {
        const enrolled = enrollments.some((enrollment: Enrollment) => {
            if (!enrollment) {
                console.log("Invalid enrollment data");
                return false;
            }

            const matchFound = enrollment._id === courseId;
            return matchFound;
        });

        return enrolled;
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
                <h5>Course Management
                    <button
                        className="btn btn-primary float-end"
                        onClick={() => {
                            dispatch(setShowAllCourses(!showAllCourses));
                            fetchCourses(!showAllCourses);
                        }}
                    >
                        {showAllCourses ? "Show My Courses" : "Show All Courses"}
                    </button>
                </h5>
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
                                                {showAllCourses ? (
                                                    // In "Show All Courses" view:
                                                    // Show Unenroll for enrolled courses and Enroll for non-enrolled courses
                                                    isEnrolled(course._id) ? (
                                                        <button
                                                            className="btn btn-danger float-end"
                                                            onClick={(event) => {
                                                                event.preventDefault();
                                                                event.stopPropagation();
                                                                toggleEnrollment(course._id);
                                                            }}
                                                        >
                                                            Unenroll
                                                        </button>
                                                    ) : (
                                                        <button
                                                            className="btn btn-success float-end"
                                                            onClick={(event) => {
                                                                event.preventDefault();
                                                                event.stopPropagation();
                                                                toggleEnrollment(course._id);
                                                            }}
                                                        >
                                                            Enroll
                                                        </button>
                                                    )
                                                ) : null  // In "My Courses" view: no enrollment buttons
                                                }
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

