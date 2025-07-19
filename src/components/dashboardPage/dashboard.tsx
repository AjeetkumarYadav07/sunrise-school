import { DashboardData } from "../../rowdata/dashboardData/dashboard.Data";
export const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold">Welcome to Sunrise School 🏫 </h2>
        <p className="text-gray-600">Empowering students since 1995</p>
      </div>
      {/* Image of school   */}

      <img
        src="https://media.istockphoto.com/id/180759684/photo/college-of-william-and-mary-in-williamsburg-va.jpg?s=2048x2048&w=is&k=20&c=u_CKwj4HoQSWlx4QZLBLglnliN-IIsm2vw2nNBvO9Ys="
        alt="College"
        className="rounded-xl w-2xs shadow"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 cursor-pointer">
        {DashboardData.map((data, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border border-gray-200 p-4 shadow hover:shadow-md transition flex flex-col items-start justify-between"
          >
            <h3 className="text-gray-600 text-sm font-medium">{data.title}</h3>
            <p className="text-2xl font-bold text-gray-900 mt-2">
              {data.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
