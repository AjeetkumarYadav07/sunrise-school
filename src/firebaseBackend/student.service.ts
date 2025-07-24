import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export interface Student {
  id?: string;
  studentname: string;
  email: string;
  branch: string;
  password: string;
  createAt?: string;
}

const studentCollection = collection(db, "students");

export async function addStudent(student: Student): Promise<void> {
  await addDoc(studentCollection, {
    ...student,
    createAt: new Date().toISOString(),
  });
}

// Optional: fetch students later
export async function getStudents(): Promise<Student[]> {
  const snapshot = await getDocs(studentCollection);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Student[];
}
