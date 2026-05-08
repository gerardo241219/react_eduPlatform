import { useState } from "react";
import { useCreateStudent } from "../hooks/useCreateStudent";

export default function StudentForm() {
  const [name, setName] = useState("");
  const { addStudent, loading } = useCreateStudent();

  const handleSubmit = async (e: React.ChangeEvent) => {
    e.preventDefault();

    await addStudent({ name });
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
        <input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Student name"
        />

        <button type="submit" disabled={loading}>
            {loading ? "Saving..." : "Save"}
        </button>
    </form>
  )
}
