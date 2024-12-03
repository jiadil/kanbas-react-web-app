import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";
import { useSelector } from "react-redux";

// Create a separate component for the content
function KanbasContent() {
    const [courses, setCourses] = useState<any[]>([]);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const [course, setCourse] = useState<any>({
        _id: "1234",
        name: "New Course",
        number: "New Number",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
        description: "New Description",
    });

    const fetchCourses = async (showAll = false) => {
        try {
            const courses = showAll ?
                await courseClient.fetchAllCourses() :
                await courseClient.fetchEnrolledCourses();
            setCourses([...courses]);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const showAllCourses = store.getState().enrollmentReducer.showAllCourses;
        fetchCourses(showAllCourses);
    }, [currentUser]);

    const addNewCourse = async () => {
        const newCourse = await userClient.createCourse(course);
        setCourses([...courses, newCourse]);
    };

    const deleteCourse = async (courseId: string) => {
        const status = await courseClient.deleteCourse(courseId);
        setCourses(courses.filter((course) => course._id !== courseId));
    };

    const updateCourse = async () => {
        await courseClient.updateCourse(course);
        setCourses(courses.map((c) => {
            if (c._id === course._id) {
                return course;
            } else {
                return c;
            }
        }));
    };

    return (
        <div id="wd-kanbas">
            <KanbasNavigation />
            <div className="wd-main-content-offset p-3">
                <Routes>
                    <Route path="/" element={<Navigate to="Account" />} />
                    <Route path="/Account/*" element={<Account />} />
                    <Route path="/Dashboard" element={
                        <ProtectedRoute>
                            <Dashboard
                                courses={courses}
                                course={course}
                                setCourse={setCourse}
                                addNewCourse={addNewCourse}
                                deleteCourse={deleteCourse}
                                updateCourse={updateCourse}
                                fetchCourses={fetchCourses}
                                setCourses={setCourses}
                            />
                        </ProtectedRoute>
                    } />
                    <Route path="/Courses/:cid/*" element={
                        <ProtectedRoute>
                            <Courses courses={courses} />
                        </ProtectedRoute>
                    } />
                    <Route path="/Calendar" element={<h1>Calendar</h1>} />
                    <Route path="/Inbox" element={<h1>Inbox</h1>} />
                </Routes>
            </div>
        </div>
    );
}

export default function Kanbas() {
    return (
        <Provider store={store}>
            <Session>
                <KanbasContent />
            </Session>
        </Provider>
    );
}