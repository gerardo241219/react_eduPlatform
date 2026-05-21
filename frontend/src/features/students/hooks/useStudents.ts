import { useEffect } from "react";

import {
    useAppDispatch,
    useAppSelector
} from "../../../app/hooks";

import { fetchStudents } from "../studentsThunks";

export const useStudents = () => {
    const dispatch = useAppDispatch();
    const { students, loading, error } = useAppSelector(state => state.students)

    useEffect(() => {
        dispatch(fetchStudents());
    }, [dispatch]);

    return { students, loading, error };
}