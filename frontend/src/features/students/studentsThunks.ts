import { createAsyncThunk } from "@reduxjs/toolkit";
import { getStudents, createStudent } from "./services/studentService";
import type { Student } from "./types";

export const fetchStudentsThunk = createAsyncThunk("students/fetchStudents",
    async () => {
        const data = await getStudents();
        return data;
    })

export const createStudentThunk = createAsyncThunk("students/createStudent",
    async (student: Omit<Student, "id">) => {
        const newStudent = await createStudent(student);
        return newStudent;
    }
)