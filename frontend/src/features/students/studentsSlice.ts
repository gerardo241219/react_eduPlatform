import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Student } from "./types";
import { createStudentThunk, fetchStudents } from "./studentsThunks";

interface StudentsState {
    students: Student[];
    loading: boolean;
    error: string | null;
}

const initialState: StudentsState = {
    students: [],
    loading: false,
    error: null
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
    },
    extraReducers: builder => {
        builder
            .addCase(
                fetchStudents.pending,
                state => {
                    state.loading = true,
                        state.error = null
                }
            )

            .addCase(
                fetchStudents.fulfilled,
                (state, action) => {
                    state.loading = false;
                    state.students = action.payload
                }
            )

            .addCase(
                fetchStudents.rejected,
                state => {
                    state.loading = false;
                    state.error = "Failed to fetch students";
                }
            )

            .addCase(
                createStudentThunk.fulfilled,
                (state, action) => {
                    state.students.push(
                        action.payload
                    );
                }
            )
    }
});

export const {
    setStudents,
    addStudent,
    deleteStudent
} = studentsSlice.actions;

export default studentsSlice.reducer;