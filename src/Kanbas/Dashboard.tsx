import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.jpg" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home">CS1234 React JS</Link>
                        <p className="wd-dashboard-course-title">Full Stack software developer</p>
                        <Link to="/Kanbas/Courses/1234/Home">Go</Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.jpg" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/2234/Home">CS2234 React JS</Link>
                        <p className="wd-dashboard-course-title">Full Stack software developer 2</p>
                        <Link to="/Kanbas/Courses/2234/Home">Go</Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.jpg" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/3234/Home">CS3334 React JS</Link>
                        <p className="wd-dashboard-course-title">Full Stack software developer 3</p>
                        <Link to="/Kanbas/Courses/3234/Home">Go</Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.jpg" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/4234/Home">CS4234 React JS</Link>
                        <p className="wd-dashboard-course-title">Full Stack software developer 4</p>
                        <Link to="/Kanbas/Courses/4234/Home">Go</Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.jpg" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/5234/Home">CS5234 React JS</Link>
                        <p className="wd-dashboard-course-title">Full Stack software developer 5</p>
                        <Link to="/Kanbas/Courses/5234/Home">Go</Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.jpg" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/6234/Home">CS6334 React JS</Link>
                        <p className="wd-dashboard-course-title">Full Stack software developer 6</p>
                        <Link to="/Kanbas/Courses/6234/Home">Go</Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.jpg" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/7234/Home">CS7334 React JS</Link>
                        <p className="wd-dashboard-course-title">Full Stack software developer 7</p>
                        <Link to="/Kanbas/Courses/7234/Home">Go</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

