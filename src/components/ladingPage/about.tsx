import { ladingImages } from "../../assets/landingImage/ladingImage";
import { DashboardData } from "../../rowdata/dashboardData/dashboard.Data";
export function About() {
  return (
    <>
      <section id="about" className="py-10 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <p className="text-gray-700 leading-relaxed">
          Sunrise College is a premier institution offering quality education in
          Arts and Commerce streams. We focus on holistic development,
          innovation, and academic excellence. Our vibrant campus, experienced
          faculty, and student-friendly environment make us a top choice for
          students year after year.
        </p>
        <div className="flex gap-2">
          <img
            src={ladingImages.classroom_img1}
            alt="About the college"
            className="mt-6 w-xl rounded-md shadow"
          />
          <img
            src={ladingImages.classroom_img2}
            alt="About the college"
            className="mt-6 w-xl rounded-md shadow"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 cursor-pointer">
          {DashboardData.map((data, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 p-3 shadow hover:shadow-md transition flex flex-col items-start justify-between"
            >
              <h3 className="text-gray-600 text-sm font-medium">
                {data.title}
              </h3>
              <p className="text-2xl font-bold text-gray-900 mt-2">
                {data.value}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
