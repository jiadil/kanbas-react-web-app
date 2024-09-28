import Modules from "../Modules";
import CourseStatus from "./Status";
export default function Home() {
    return (
        <div className="d-flex" id="wd-home">
            <div className="flex-fill">
                <Modules />
            </div>

            {/* change d-md-block to d-lg-block, add ms-4 */}
            <div className="d-none d-lg-block ms-4">
                <CourseStatus />
            </div>
        </div>
    );
}
