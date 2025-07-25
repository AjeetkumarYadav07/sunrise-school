import { useEffect, useState } from "react";
import { getStudents, type Student } from "../../firebaseBackend/student.service";

export const Students = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedBranch , setSelectedBranch] = useState<string>(" ");
  
  //Filter Student Option 
  const filterStudents = selectedBranch === " " ? students : students.filter(student => student.branch === selectedBranch);

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
      <h1 className="text-2xl font-bold mb-4">Registered Students ({students.length}) </h1>
      <h2 className="mb-4">
  Filter: 
  <button onClick={() => setSelectedBranch(" ")} className=" cursor-pointer ml-2 px-2 py-1 bg-gray-200 rounded">All</button>
  <button onClick={() => setSelectedBranch("Arts")} className=" cursor-pointer ml-2 px-2 py-1 bg-blue-200 rounded">Arts</button>
  <button onClick={() => setSelectedBranch("Commerce")} className=" cursor-pointer ml-2 px-2 py-1 bg-green-200 rounded">Commerce</button>
  <button onClick={() => setSelectedBranch("Science")} className=" cursor-pointer ml-2 px-2 py-1 bg-green-200 rounded">Science</button>

</h2>
      <table className="min-w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Branch</th>
            <th className="px-4 py-2 border">Password</th>
            <th className="px-4 py-2 border">Status </th>
          </tr>
        </thead>
        <tbody>
          {filterStudents.map((student) => (
            <tr key={student.id} className="border-t">
              <td className="px-4 py-2 border">{student.studentname}</td>
              <td className="px-4 py-2 border">{student.email}</td>
              <td className="px-4 py-2 border">{student.branch}</td>
              <td className="px-4 py-2 border">{student.password}</td>
              <td className="px-4 py-2 border ">{student.studentname.startsWith("K") ? "Inactive" : "Active" }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};