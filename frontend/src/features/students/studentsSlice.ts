import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Student } from "./types";

interface StudentsState {
    students: Student[]
}

const initialState: StudentsState = {
    students: []
}

const studentsSlice = createSlice({
    name: "students",
    initialState,
    reducers: {
        setStudents: (
            state,
            action: PayloadAction<Student[]>
        ) => {
            state.students = action.payload;
        },

        addStudent: (
            state,
            action: PayloadAction<Student>
        ) => {
            state.students.push(
                action.payload
            );
        },

        deleteStudent: (
            state,
            action: PayloadAction<number>
        ) => {
            state.students = state.students.filter(student => student.id !== action.payload);
        }
    }
});

export const {
    setStudents,
    addStudent,
    deleteStudent
} = studentsSlice.actions;

export default studentsSlice.reducer;