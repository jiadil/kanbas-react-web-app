import axios from "axios";

const api = axios.create({
    withCredentials: true
});

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;
const USERS_API = `${REMOTE_SERVER}/api/users`;

export const enrollInCourse = async (userId: string, courseId: string) => {
    const response = await api.post(ENROLLMENTS_API, { userId, courseId });
    return response.data;
};

export const unenrollFromCourse = async (userId: string, courseId: string) => {
    const response = await api.delete(`${ENROLLMENTS_API}/${userId}/${courseId}`);
    return response.data;
};

export const findUserEnrollments = async (userId: string) => {
    const response = await api.get(`${USERS_API}/${userId}/enrollments`);
    return response.data;
};

export default {
    enrollInCourse,
    unenrollFromCourse,
    findUserEnrollments
}