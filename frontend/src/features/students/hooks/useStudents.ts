import { useEffect, useState } from "react";
import { getStudents } from "../services/studentService";
import type { Student } from "../types";

export const useStudents = () => {
    const [students, setStudents] = useState<Student[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;
        
       const fetchStudents = async () => {
            try {
                const data = await getStudents();
                if (isMounted) setStudents(data);
            } catch (err) {
                 if (isMounted) setError("Failed to fetch students");
            } finally {
                if (isMounted) setLoading(false);
            }
        }

        fetchStudents();
        
        return () => {
            isMounted = false;
        };
    }, []);

    return { students, setStudents, loading, error };
}