//Type
export interface Student {
  id: number;
  name: string;
  department: "Arts" | "Commerce";
}

// Data
export const students: Student[] = [
  { id: 1, name: "Arrav Sharma", department: "Arts" },
  { id: 2, name: "Arun Kumar", department: "Commerce" },
  { id: 3, name: "Rohit Sharma", department: "Arts" },
  { id: 4, name: "Ankit Dhiman", department: "Commerce" },
  { id: 5, name: "Ayush Kumar", department: "Arts" },
  { id: 6, name: "Nikil Dhiman", department: "Commerce" },
  { id: 7, name: "Ajay Thakur", department: "Commerce" },
];
