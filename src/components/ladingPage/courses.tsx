import { landingData } from "../../rowdata/landing/landingMockData";
export function Courses() {
  return (
    <section className="py-10 text-center bg-gray-50">
      <h2 className="text-2xl font-bold mb-4">Courses Offered</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {landingData.courses.map((course) => (
          <div
            key={course}
            className="bg-white shadow-md px-6 py-4 rounded-md text-blue-600 font-semibold"
          >
            {course}
          </div>
        ))}
      </div>
    </section>
  );
}
