import { useStudents } from "../hooks/useStudents";
import StudentForm from "../components/StudentForm";
import { deleteStudent } from "../services/studentService";

export default function StudentsPage() {
  const { students, setStudents, loading, error } = useStudents();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const handleDelete = async (id: number) => {
    await deleteStudent(id);

    setStudents(prev => prev.filter(student => student.id !== id))
  }

  return (
    <div>
      <h1>Students</h1>

      <StudentForm />

      {students.map((s) => (
        <div>
          <div key={s.id}>{s.name}</div>
          <button onClick={() => handleDelete(s.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}