import { createSlice }
    from "@reduxjs/toolkit";

import type {
    PayloadAction
} from "@reduxjs/toolkit";

import type {
    Student
} from "./types";

import * as studentsThunks
    from "./studentsThunks";

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
        },

        updateStudent: (
            state,
            action: PayloadAction<Student>
        ) => {
            state.students =
                state.students.map(student =>
                    student.id === action.payload.id ? action.payload : student
                )
        }
    },
    extraReducers: builder => {
        builder
            .addCase(
                studentsThunks.fetchStudentsThunk.pending,
                state => {
                    state.loading = true,
                        state.error = null
                }
            )

            .addCase(
                studentsThunks.fetchStudentsThunk.fulfilled,
                (state, action) => {
                    state.loading = false;
                    state.students = action.payload
                }
            )

            .addCase(
                studentsThunks.fetchStudentsThunk.rejected,
                state => {
                    state.loading = false;
                    state.error = "Failed to fetch students";
                }
            )

            .addCase(
                studentsThunks.createStudentThunk.fulfilled,
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
    deleteStudent,
    updateStudent,
} = studentsSlice.actions;

export default studentsSlice.reducer;