import React from "react";

interface DeleteAssignmentDialogProps {
    dialogTitle: string;
    isVisible: boolean;
    onConfirm: () => void;
    onCancel: () => void;
}

export default function DeleteAssignmentDialog({
    dialogTitle,
    isVisible,
    onConfirm,
    onCancel,
}: DeleteAssignmentDialogProps) {
    if (!isVisible) return null;

    return (
        <div className="modal fade show" style={{ display: "block" }} data-bs-backdrop="static">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5">{dialogTitle}</h1>
                        <button type="button" className="btn-close" onClick={onCancel}></button>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure you want to delete this assignment?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onCancel}>
                            Cancel
                        </button>
                        <button type="button" className="btn btn-danger" onClick={onConfirm}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
