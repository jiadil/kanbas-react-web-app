import { createSlice } from "@reduxjs/toolkit";

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
    assignments: [],
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        setAssignments: (state, action) => {
            state.assignments = action.payload;
        },
        addAssignment: (state, action) => {
            state.assignments = [...state.assignments, action.payload];
        },
        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter((a) => a._id !== action.payload);
        },
        updateAssignment: (state, action) => {
            state.assignments = state.assignments.map((a) =>
                a._id === action.payload._id ? action.payload : a
            );
        },
    },
});

export const { setAssignments, addAssignment, deleteAssignment, updateAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;