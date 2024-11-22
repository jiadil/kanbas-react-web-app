import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Enrollment {
    _id: string;
    user: string;
    course: string;
}

interface EnrollmentState {
    enrollments: Enrollment[];
    showAllCourses: boolean;
}

interface RemoveEnrollmentPayload {
    userId: string;
    courseId: string;
}

const initialState: EnrollmentState = {
    enrollments: [],
    showAllCourses: false,
};

const enrollmentSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        setEnrollments: (state, action: PayloadAction<Enrollment[]>) => {
            state.enrollments = action.payload;
        },
        addEnrollment: (state, action: PayloadAction<Enrollment>) => {
            state.enrollments = [...state.enrollments, action.payload];
        },
        removeEnrollment: (state, action: PayloadAction<RemoveEnrollmentPayload>) => {
            state.enrollments = state.enrollments.filter(
                (enrollment) =>
                    !(enrollment.user === action.payload.userId &&
                        enrollment.course === action.payload.courseId)
            );
        },
        setShowAllCourses: (state, action: PayloadAction<boolean>) => {
            state.showAllCourses = action.payload;
        },
    },
});

// Export the action creators
export const {
    setEnrollments,
    addEnrollment,
    removeEnrollment,
    setShowAllCourses,
} = enrollmentSlice.actions;

// Export the reducer
export default enrollmentSlice.reducer;