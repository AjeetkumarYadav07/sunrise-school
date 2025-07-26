// teacher.service.ts
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export interface Teacher {
  id?: string;
  name: string;
  phone: string;
  department: string;
  address : string ;
  createAt?: string;
}

const teacherCollection = collection(db, "teachers");

export async function addTeacher(teacher: Teacher): Promise<void> {
  await addDoc(teacherCollection, {
    ...teacher,
    createAt: new Date().toISOString(),
  });
}

export async function getTeachers(): Promise<Teacher[]> {
  const snapshot = await getDocs(teacherCollection);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Teacher[];
}
