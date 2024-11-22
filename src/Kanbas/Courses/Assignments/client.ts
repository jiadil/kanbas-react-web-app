import axios from "axios";

const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

export const findAssignmentsForCourse = async (courseId: string) => {
    const response = await axiosWithCredentials.get(
        `${COURSES_API}/${courseId}/assignments`
    );
    return response.data;
};
export const findAllAssignments = async () => {
    const response = await axios.get(ASSIGNMENTS_API);
    return response.data;
};

export const findAssignmentById = async (id: string) => {
    const response = await axios.get(`${ASSIGNMENTS_API}/${id}`);
    return response.data;
};


export const createAssignment = async (courseId: string, assignment: any) => {
    const response = await axios.post(
        `${COURSES_API}/${courseId}/assignments`,
        assignment
    );
    return response.data;
};

export const updateAssignment = async (id: string, assignment: any) => {
    const response = await axios.put(
        `${ASSIGNMENTS_API}/${id}`,
        assignment
    );
    return response.data;
};

export const deleteAssignment = async (id: string) => {
    const response = await axios.delete(`${ASSIGNMENTS_API}/${id}`);
    return response.data;
};