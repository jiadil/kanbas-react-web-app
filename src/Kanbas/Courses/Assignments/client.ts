import axios from "axios";
import { Assignment } from "./types";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

// Add data transformation helper
const transformAssignment = (assignment: any): Assignment => {
    return {
        _id: assignment._id.toString(), // Convert ObjectId to string if needed
        title: assignment.title || "",
        course: assignment.course || "",
        points: assignment.points || 100, // Default to 100 if missing
        description: assignment.description || "",
        due: assignment.due ? new Date(assignment.due).toISOString() : undefined,
        available: assignment.available ? new Date(assignment.available).toISOString() : undefined,
        until: assignment.until ? new Date(assignment.until).toISOString() : undefined
    };
};

export const findAssignmentsForCourse = async (courseId: string): Promise<Assignment[]> => {
    try {
        const response = await axios.get(`${COURSES_API}/${courseId}/assignments`);
        // Transform each assignment
        return response.data.map(transformAssignment);
    } catch (error) {
        console.error("Error fetching assignments:", error);
        return [];
    }
};

export const findAllAssignments = async (): Promise<Assignment[]> => {
    try {
        const response = await axios.get(ASSIGNMENTS_API);
        return response.data.map(transformAssignment);
    } catch (error) {
        console.error("Error fetching all assignments:", error);
        return [];
    }
};

export const findAssignmentById = async (id: string): Promise<Assignment | null> => {
    try {
        const response = await axios.get(`${ASSIGNMENTS_API}/${id}`);
        return transformAssignment(response.data);
    } catch (error) {
        console.error("Error fetching assignment:", error);
        return null;
    }
};

export const createAssignment = async (courseId: string, assignment: any) => {
    try {
        console.log("Creating assignment with:", {
            courseId,
            assignment
        });
        const response = await axios.post(
            `${COURSES_API}/${courseId}/assignments`,
            assignment
        );
        return response.data;
    } catch (error: any) {
        console.error("Create assignment error:", {
            message: error.message,
            response: error.response?.data,
            data: assignment
        });
        throw error;
    }
};

export const updateAssignment = async (id: string, assignment: Partial<Assignment>): Promise<Assignment> => {
    try {
        const response = await axios.put(`${ASSIGNMENTS_API}/${id}`, assignment);
        return transformAssignment(response.data);
    } catch (error) {
        console.error("Error updating assignment:", error);
        throw error;
    }
};

export const deleteAssignment = async (id: string): Promise<void> => {
    try {
        await axios.delete(`${ASSIGNMENTS_API}/${id}`);
    } catch (error) {
        console.error("Error deleting assignment:", error);
        throw error;
    }
};