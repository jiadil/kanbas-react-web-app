import axios from "axios";

const api = axios.create({
    withCredentials: true
});

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const API_BASE = `${REMOTE_SERVER}/api/courses`;

export const findUsersInCourse = async (courseId: string) => {
    try {
        const response = await api.get(`${API_BASE}/${courseId}/people`);
        return response.data;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
};

export const addUserToCourse = async (courseId: string, user: any) => {
    const response = await api.post(`${API_BASE}/${courseId}/people`, user);
    return response.data;
};

export const removeUserFromCourse = async (courseId: string, userId: string) => {
    const response = await api.delete(`${API_BASE}/${courseId}/people/${userId}`);
    return response.data;
};