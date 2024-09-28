import { FaPlus, FaSearch } from "react-icons/fa";
export default function AssignmentsControls() {
    return (
        <div id="wd-modules-controls" className="d-flex justify-content-between align-items-center">
            <div className="input-group me-5">
                <span className="input-group-text bg-white text-dark border-end-0">
                    <FaSearch />
                </span>
                <input type="text" id="wd-search-assignment" className="form-control border-start-0" placeholder="Search..." />
            </div>

            <div className="d-flex">
                <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary d-flex align-items-center me-1">
                    <FaPlus className="position-relative me-1" style={{ bottom: "1px" }} />
                    Group
                </button>

                <button id="wd-add-assignment" className="btn btn-lg btn-danger d-flex align-items-center">
                    <FaPlus className="position-relative me-1" style={{ bottom: "1px" }} />
                    Assignment
                </button>
            </div>
        </div>
    );
}
