// Courses/Enrollments/client.ts
import axios from "axios";

const api = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_REMOTE_SERVER
});
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const BASE_API = `${REMOTE_SERVER}/api/users/current/courses`;

export const enrollInCourse = async (userId: string, courseId: string) => {
    const response = await api.post(`${BASE_API}/${courseId}`);
    return response.data;
};

export const unenrollFromCourse = async (userId: string, courseId: string) => {
    const response = await api.delete(`${BASE_API}/${courseId}`);
    return response.data;
};

export const findUserEnrollments = async (userId: string) => {
    const response = await api.get(`${BASE_API}`);
    return response.data;
};

export default {
    enrollInCourse,
    unenrollFromCourse,
    findUserEnrollments
};