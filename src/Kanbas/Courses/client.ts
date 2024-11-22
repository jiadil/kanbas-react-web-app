import axios from "axios";

const api = axios.create({
    withCredentials: true
});

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const USERS_API = `${REMOTE_SERVER}/api/users`;

export const fetchAllCourses = async () => {
    const response = await axios.get(`${USERS_API}/current/courses?showAll=true`, {
        withCredentials: true
    });
    return response.data;
};

export const fetchEnrolledCourses = async () => {
    const response = await axios.get(`${USERS_API}/current/courses?showAll=false`, {
        withCredentials: true
    });
    return response.data;
};

export const createModuleForCourse = async (courseId: string, module: any) => {
    const response = await axios.post(
        `${COURSES_API}/${courseId}/modules`,
        module
    );
    return response.data;
};



export const findModulesForCourse = async (courseId: string) => {
    const response = await axios
        .get(`${COURSES_API}/${courseId}/modules`);
    return response.data;
};


// export const fetchAllCourses = async () => {
//     const { data } = await axios.get(COURSES_API);
//     return data;
// };

export const deleteCourse = async (id: string) => {
    const { data } = await axios.delete(`${COURSES_API}/${id}`);
    return data;
};

export const updateCourse = async (course: any) => {
    const { data } = await axios.put(`${COURSES_API}/${course._id}`, course);
    return data;
};

export default {
    fetchAllCourses,
    fetchEnrolledCourses,
    deleteCourse,
    updateCourse,
    findModulesForCourse,
    createModuleForCourse
};


