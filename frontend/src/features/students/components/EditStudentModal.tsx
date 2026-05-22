import { useState } from "react";

import type { FormEvent } from "react";

import type { Student } from "../types";

import Modal from "../../../shared/ui/Modal";

import Input from "../../../shared/ui/Input";

import Button from "../../../shared/ui/Button";

import {
    useAppDispatch,
} from "../../../app/hooks";

import {
    updateStudent as updateStudentAction,
} from "../studentsSlice";

import { updateStudent } from "../services/studentService";

interface Props {
    open: boolean;
    student: Student | null;
    onClose: () => void;
}

export default function EditStudentModal({
    open,
    student,
    onClose,
}: Props) {
    const dispatch =
        useAppDispatch();

    const [name, setName] =
        useState(student?.name || "");

    const handleSubmit = async (
        e: FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        if (!student) return;

        const updated =
            await updateStudent(
                student.id,
                { name }
            );

        if (!updated) {
            throw new Error(
                "Student not found"
            )
        }

        dispatch(
            updateStudentAction(updated)
        );

        onClose();
    };

    return (
        <Modal
            open={open}
            title="Edit Student"
            onClose={onClose}
        >
            <form
                onSubmit={handleSubmit}
                className="space-y-4"
            >
                <Input
                    value={name}
                    onChange={(e) =>
                        setName(e.target.value)
                    }
                />

                <div className="flex justify-end">
                    <Button type="submit">
                        Save Changes
                    </Button>
                </div>
            </form>
        </Modal>
    );
}