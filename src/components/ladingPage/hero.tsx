import { landingData } from "../../rowdata/landing/landingMockData";

export function Hero() {
  return (
    <>
      <section
        className="h-100 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${landingData.bannerImage})` }}
      >
        <div className="bg-black/50 text-white text-center p-6 rounded-xl">
          <h1 className="text-3xl font-bold">{landingData.schoolName}</h1>
          <p className="text-lg mt-2">{landingData.tagline}</p>
        </div>
      </section>
    </>
  );
}
