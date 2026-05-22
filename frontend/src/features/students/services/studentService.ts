import type { Student } from "../types";
import api from "../../../shared/services/api";

// export const getStudents = async (): Promise<Student[]> => {
//     const response = await api.get("/students");
//     return response.data;
// };

export const getStudents = async (): Promise<Student[]> => {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate network delay

  const storedStudentData = localStorage.getItem("students");

  if (storedStudentData) {
    const studentsData = JSON.parse(storedStudentData);
    return studentsData;
  }

  localStorage.setItem("students", JSON.stringify([]));
  return [];
};

export const createStudent = async (
  student: Omit<Student, "id">,
): Promise<Student> => {
  await new Promise((r) => setTimeout(r, 500));

  const storedStudentData = localStorage.getItem("students");

  const studentsData: Student[] = storedStudentData
    ? JSON.parse(storedStudentData)
    : [];

  const newStudent: Student = {
    id: Date.now(),
    ...student,
  };

  const updatedStudents = [...studentsData, newStudent];

  localStorage.setItem("students", JSON.stringify(updatedStudents));

  return newStudent;
};

export const deleteStudent = async (id: number): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const storedStudentData = localStorage.getItem("students");

  const studentData: Student[] = storedStudentData
    ? JSON.parse(storedStudentData)
    : [];

  const updatedStudents = studentData.filter((student) => student.id !== id);

  localStorage.setItem("students", JSON.stringify(updatedStudents));
};

export const updateStudent = async (id: number, updateData: Partial<Student>) => {
  await new Promise(r => setTimeout(r, 500));

  const storedData = localStorage.getItem("students");
  const students: Student[] = storedData ? JSON.parse(storedData) : [];

  const updatedStudents = students.map(student =>
    student.id === id ? {
      ...student,
      updateData
    } : student
  );

  localStorage.setItem("students", JSON.stringify(updatedStudents))

  const updatedStudent = updatedStudents.find(s => s.id === id);

  if (!updateStudent) {
    throw new Error(
      "Student not found"
    )
  }

  return updatedStudent;
}
