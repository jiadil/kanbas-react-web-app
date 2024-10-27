import * as db from "../Database";

const initialState = {
    enrollments: db.enrollments,
    showAllCourses: false
};

const enrollmentReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "set-show-all-courses":
            return {
                ...state,
                showAllCourses: action.payload
            };
        case "add-enrollment":
            return {
                ...state,
                enrollments: [
                    ...state.enrollments,
                    {
                        _id: new Date().getTime().toString(),
                        user: action.payload.userId,
                        course: action.payload.courseId
                    }
                ]
            };
        case "remove-enrollment":
            return {
                ...state,
                enrollments: state.enrollments.filter(
                    e => !(e.user === action.payload.userId && e.course === action.payload.courseId)
                )
            };
        default:
            return state;
    }
};

export default enrollmentReducer;