import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router";
export default function CoursesNavigation() {
    const { cid } = useParams();
    console.log(cid);
    const { pathname } = useLocation();

    const links = [
        { label: "Home", path: `/Kanbas/Courses/${cid}/Home`, id: "wd-course-home-link" },
        { label: "Modules", path: `/Kanbas/Courses/${cid}/Modules`, id: "wd-course-modules-link" },
        { label: "Piazza", path: `/Kanbas/Courses/${cid}/Piazza`, id: "wd-course-piazza-link" },
        { label: "Zoom", path: `/Kanbas/Courses/${cid}/Zoom`, id: "wd-course-zoom-link" },
        { label: "Assignments", path: `/Kanbas/Courses/${cid}/Assignments`, id: "wd-course-assignments-link" },
        { label: "Quizzes", path: `/Kanbas/Courses/${cid}/Quizzes`, id: "wd-course-quizzes-link" },
        { label: "Grades", path: `/Kanbas/Courses/${cid}/Grades`, id: "wd-course-grades-link" },
        { label: "People", path: `/Kanbas/Courses/${cid}/People`, id: "wd-course-people-link" }
    ];

    return (
        <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
            {links.map((link) => (
                <Link
                    key={link.id}
                    id={link.id} // Set the id dynamically
                    to={link.path}
                    className={`list-group-item ${pathname.includes(link.label) ? "active" : "text-danger"} border border-0`}
                >
                    {link.label}
                </Link>
            ))}
        </div>

        // <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
        //     <Link id="wd-course-home-link" to="/Kanbas/Courses/1234/Home" className="list-group-item active border border-0">Home</Link>
        //     <Link id="wd-course-modules-link" to="/Kanbas/Courses/1234/Modules" className="list-group-item text-danger border border-0">Modules</Link>
        //     <Link id="wd-course-piazza-link" to="/Kanbas/Courses/1234/Piazza" className="list-group-item text-danger border border-0">Piazza</Link>
        //     <Link id="wd-course-zoom-link" to="/Kanbas/Courses/1234/Zoom" className="list-group-item text-danger border border-0">Zoom</Link>
        //     <Link id="wd-course-quizzes-link" to="/Kanbas/Courses/1234/Assignments" className="list-group-item text-danger border border-0">Assignments</Link>
        //     <Link id="wd-course-assignments-link" to="/Kanbas/Courses/1234/Quizzes" className="list-group-item text-danger border border-0">Quizzes</Link>
        //     <Link id="wd-course-grades-link" to="/Kanbas/Courses/1234/Grades" className="list-group-item text-danger border border-0">Grades</Link>
        //     <Link id="wd-course-people-link" to="/Kanbas/Courses/1234/People" className="list-group-item text-danger border border-0">People</Link>
        // </div>
    );
}
