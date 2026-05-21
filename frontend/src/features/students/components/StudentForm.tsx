import { useState } from "react";
import type React from "react";

import { createStudentThunk } from "../studentsThunks";

import { useAppDispatch } from "../../../app/hooks";

import Input from "../../../shared/ui/Input";
import Button from "../../../shared/ui/Button";

export default function StudentForm() {
  const [name, setName] = useState("");

  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim()) return;

    dispatch(
      createStudentThunk({
        name,
      })
    );

    setName("");
  };

  return (
    <div className="border rounded-xl p-6 bg-gray-50">
      <div className="mb-6">
        <h2 className="text-xl font-semibold">
          New Stuent
        </h2>

        <p className="text-gray-500">
          Add a new student to the platform
        </p>
      </div>

      <form
        className="space-y-4"
        onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium mb-1">
            Student Name
          </label>

          <Input
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            placeholder="Student name"
          />
        </div>

        <div className="flex justify-end">
          <Button type="submit">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}