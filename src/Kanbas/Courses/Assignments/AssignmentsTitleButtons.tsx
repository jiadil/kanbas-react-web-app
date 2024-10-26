import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import FacultyRoute from "../../Account/FacultyRoute";
export default function AssignmentsTitleButtons() {
    return (
        <div className="float-end d-flex align-items-center">
            <span className="border border-1 border-dark rounded-pill p-1 me-2">
                40% of Total
            </span>
            <FacultyRoute><BsPlus className="fs-2 me-2" /></FacultyRoute >
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}
