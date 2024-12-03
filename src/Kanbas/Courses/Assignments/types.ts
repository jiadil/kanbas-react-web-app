export interface Assignment {
    _id: string;
    title: string;
    course: string;
    points?: number; // Make optional
    description?: string;
    due?: string; // Make optional
    available?: string; // Make optional
    until?: string; // Make optional
}