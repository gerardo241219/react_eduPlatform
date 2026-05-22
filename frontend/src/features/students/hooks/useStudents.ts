import { useEffect } from "react";

import {
    useAppDispatch,
    useAppSelector
} from "../../../app/hooks";

import { fetchStudentsThunk } from "../studentsThunks";

export const useStudents = () => {
    const dispatch = useAppDispatch();
    const { students, loading, error } = useAppSelector(state => state.students)

    useEffect(() => {
        dispatch(fetchStudentsThunk());
    }, [dispatch]);

    return { students, loading, error };
}