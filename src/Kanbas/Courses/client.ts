import axios from "axios";

const api = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_REMOTE_SERVER
});

const COURSES_API = `/api/courses`;
const USERS_API = `/api/users`;

// Course operations
export const fetchAllCourses = async () => {
    const { data } = await api.get(`${USERS_API}/current/courses?showAll=true`);
    return data;
};

export const fetchEnrolledCourses = async () => {
    const { data } = await api.get(`${USERS_API}/current/courses`);
    return data;
};

export const createCourse = async (course: any) => {
    const { data } = await api.post(`${USERS_API}/current/courses`, course);
    return data;
};

export const updateCourse = async (course: any) => {
    const { data } = await api.put(`${COURSES_API}/${course._id}`, course);
    return data;
};

export const deleteCourse = async (id: string) => {
    const { data } = await api.delete(`${COURSES_API}/${id}`);
    return data;
};

// Module operations
export const createModuleForCourse = async (courseId: string, module: any) => {
    const { data } = await api.post(`${COURSES_API}/${courseId}/modules`, module);
    return data;
};

export const findModulesForCourse = async (courseId: string) => {
    const { data } = await api.get(`${COURSES_API}/${courseId}/modules`);
    return data;
};

// Auth helper
const testAuth = async () => {
    try {
        await api.post(`${USERS_API}/profile`);
        return true;
    } catch {
        return false;
    }
};

export default {
    fetchAllCourses,
    fetchEnrolledCourses,
    createCourse,
    updateCourse,
    deleteCourse,
    createModuleForCourse,
    findModulesForCourse
};