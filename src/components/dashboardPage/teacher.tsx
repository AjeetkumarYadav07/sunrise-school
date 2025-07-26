import { useEffect, useState } from "react";
import { getTeachers, type Teacher,} from "../../firebaseBackend/teacher.service";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

export const Teachers = () => {
    const navigate = useNavigate() 
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTeacher, setSelectedTeacher] = useState(" ");

  //filter
  const filteredTeacher =
    selectedTeacher === " "
      ? teachers
      : teachers.filter((teacher) => teacher.department === selectedTeacher);

  useEffect(() => {
    async function fetchTeachers() {
      const data = await getTeachers();
      setTeachers(data);
      setLoading(false);
    }
    fetchTeachers();
  }, []);
  if (loading) return <p className="text-center">Loading students...</p>;

  //Handle add Teacher 

  const handleaddTeacher = () => {
     navigate("/add-teacher")
  }
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
    <h1 className="text-2xl font-bold">Total Teachers ({teachers.length})</h1>
    <Button
      onClick={handleaddTeacher}
      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 cursor-pointer rounded transition"
    >
      + Add Teacher
    </Button>
  </div>
      <h2 className="mb-4">
        Filter:
        <button
          onClick={() => setSelectedTeacher(" ")}
          className=" cursor-pointer ml-2 px-2 py-1 bg-gray-200 rounded hover:bg-gray-400 " 
        >
          All
        </button>
        <button
          onClick={() => setSelectedTeacher("Arts")}
          className=" cursor-pointer ml-2 px-2 py-1 bg-blue-200 rounded hover:bg-blue-400 "
        >
          Arts
        </button>
        <button
          onClick={() => setSelectedTeacher("Commerce")}
          className=" cursor-pointer ml-2 px-2 py-1 bg-green-200 rounded hover:bg-green-400 "
        >
          Commerce
        </button>
        <button
          onClick={() => setSelectedTeacher("Science")}
          className=" cursor-pointer ml-2 px-2 py-1 bg-yellow-200 rounded hover:bg-yellow-400 "
        >
          Science
        </button>
      </h2>
      <table className="min-w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Department</th>
            <th className="px-4 py-2 border">Contact</th>
            <th className="px-4 py-2 border">Address</th>
            <th className="px-4 py-2 border">Status </th>
          </tr>
        </thead>
        <tbody>
          {filteredTeacher.map((teacher) => (
            <tr key={teacher.id} className="border-t">
              <td className="px-4 py-2 border">{teacher.name}</td>
              <td className="px-4 py-2 border">{teacher.department}</td>
              <td className="px-4 py-2 border">{teacher.phone}</td>
              <td className="px-4 py-2 border">{teacher.address}</td>

              {/* /// <td className="px-4 py-2 border ">{student.studentname.startsWith("K") ? "Inactive" : "Active" }</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
