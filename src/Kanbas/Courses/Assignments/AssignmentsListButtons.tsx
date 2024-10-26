import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { deleteAssignment } from "./reducer";
export default function AssignmentsListButtons(
    { assignmentId, deleteAssignment }: { assignmentId: string, deleteAssignment: (assignmentId: string) => void }
) {
    return (
        <div className="float-end d-flex align-items-center me-2">
            <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteAssignment(assignmentId)} />
            <span className="me-3"><GreenCheckmark /></span>
            <IoEllipsisVertical />
        </div>
    );
}
