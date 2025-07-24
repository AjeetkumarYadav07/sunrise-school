import { useEffect, useState } from "react";
import { getStudents, type Student } from "../../firebaseBackend/student.service";

export const Students = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStudent() {
      const data = await getStudents();
      setStudents(data);
      setLoading(false);
    }
    fetchStudent();
  }, []);
  if (loading) return <p className="text-center">Loading students...</p>;
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Registered Students</h1>
      <table className="min-w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Branch</th>
            <th className="px-4 py-2 border">Password</th>
            <th className="px-4 py-2 border">Active</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="border-t">
              <td className="px-4 py-2 border">{student.studentname}</td>
              <td className="px-4 py-2 border">{student.email}</td>
              <td className="px-4 py-2 border">{student.branch}</td>
              <td className="px-4 py-2 border">{student.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
