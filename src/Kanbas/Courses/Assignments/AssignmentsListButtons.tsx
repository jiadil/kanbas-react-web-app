import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
export default function AssignmentsListButtons() {
    return (
        <div className="float-end d-flex align-items-center me-2">
            <span className="me-3"><GreenCheckmark /></span>
            <IoEllipsisVertical />
        </div>
    );
}
