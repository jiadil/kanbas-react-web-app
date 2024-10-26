import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

interface Assignment {
    _id: string;
    title: string;
    course: string;
    description: string;
    points: number;
    due: string;
    available: string;
    until: string;
}

interface AssignmentState {
    assignments: Assignment[];
}

const initialState: AssignmentState = {
    assignments: assignments,
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, { payload: assignment }) => {
            const newAssignment: Assignment = {
                _id: new Date().getTime().toString(),
                title: assignment.title,
                course: assignment.course,
                description: assignment.description,
                points: assignment.points,
                due: assignment.due,
                available: assignment.available,
                until: assignment.until,
            };
            state.assignments = [...state.assignments, newAssignment];
        },
        deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter((a) => a._id !== assignmentId);
        },
        updateAssignment: (state, { payload: assignment }) => {
            state.assignments = state.assignments.map((a) => a._id === assignment._id ? assignment : a);
        },
    },
});

export const { addAssignment, deleteAssignment, updateAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
