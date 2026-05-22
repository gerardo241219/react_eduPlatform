import { useStudents } from "../hooks/useStudents";
import type { Student } from "../types";
import StudentForm from "../components/StudentForm";
import { deleteStudent } from "../services/studentService";
import { useAppDispatch } from "../../../app/hooks";
import { deleteStudent as deleteStudentAction } from "../studentsSlice";
import Button from "../../../shared/ui/Button";
import { useState } from "react";
import EditStudentModal from "../components/EditStudentModal";

export default function StudentsPage() {
  const { students, loading, error } = useStudents();
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [openEditModal, setOpenEditModal] = useState(false);

  const dispatch = useAppDispatch();

  const handleDelete = async (id: number) => {
    await deleteStudent(id);
    dispatch(deleteStudentAction(id))
  }

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="space-y-3">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="h-16 bg-gray-200 animate-pulse rounded-lg" />
          ))}
        </div>
      </div>
    )
  };

  if (error) {
    return (
      <div className="bg-red-100 text-red-700 p-4 rounded-lg">
        {error}
      </div>
    )
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">Students</h1>
            <p className="text-gray-500">Manage your students</p>
          </div>
        </div>

        <StudentForm />

        <div className="mt-6">
          {students.length === 0 ? (
            <div className="text-center py-10 text-gray-500 border rounded-xl">
              No students found
            </div>
          ) : (
            <div className="space-y-3">
              {students.map((s) => (
                <div
                  key={s.id}
                  className="flex items-center justify-between border rounded-xl p-4 hover:shadow-md transition-all duration-200">
                  <div>
                    <p className="font-medium">{s.name}</p>
                    <p className="text-sm text-gray-500">Student ID: {s.id}</p>
                  </div>

                  <Button
                    onClick={() => handleDelete(s.id)}
                    className="bg-red-500 hover:bg-red-600">Delete</Button>

                  <Button
                    onClick={() => {
                      setSelectedStudent(s);
                      setOpenEditModal(true);
                    }}

                    className="bg-yellow-500 hover:bg-yellow-600">Edit</Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <EditStudentModal
        open={openEditModal}
        student={selectedStudent}
        onClose={() => setOpenEditModal(false)} />
    </>
  );
}