import { useState } from "react";
import { createStudent } from "../services/studentService";
import type { Student } from "../types";

export const useCreateStudent = () => {
    const [loading, setLoading] = useState(false);

    const addStudent = async (student: Omit<Student, "id">) => {
        setLoading(true);

        try {
            return await createStudent(student);
        } finally {
            setLoading(false);
        }
    }

    return { addStudent, loading};
}