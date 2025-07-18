import { ladingImages } from "../../assets/landingImage/ladingImage";
export function About() {
  return (
    <>
      <section className="py-10 px-4 max-w-4xl mx-auto text-center">
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
      </section>
    </>
  );
}
