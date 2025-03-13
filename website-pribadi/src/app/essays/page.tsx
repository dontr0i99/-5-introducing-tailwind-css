import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Esai",
  description: "Halaman Esai.",
  openGraph: {
    title: "Esai",
    description: "Halaman Esai.",
  },
};

const essays = [
  {
    title: "Pentingnya Data Science dalam Era Digital",
    summary:
      "Data Science memainkan peran penting dalam dunia modern, membantu perusahaan dan individu mengambil keputusan berbasis data.",
    url: "https://www.linkedin.com/in/mtryobagus/",
  },
  {
    title: "Perkembangan Machine Learning dan Dampaknya",
    summary:
      "Machine Learning semakin berkembang pesat dan mengubah berbagai aspek kehidupan, mulai dari industri hingga layanan kesehatan.",
    url: "https://www.linkedin.com/in/mtryobagus/",
  },
];

export default function Essays() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 flex flex-col items-center px-8 py-12 text-white">
      <header className="text-center">
        <h1 className="font-extrabold text-5xl">Esai</h1>
        <p className="text-lg mt-4 max-w-2xl">
          Berikut adalah beberapa esai yang telah saya tulis tentang teknologi dan perkembangan digital.
        </p>
      </header>
      <div className="mt-12 w-full max-w-4xl">
        <ul className="space-y-8">
          {essays.map((essay, index) => (
            <li
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 text-indigo-800 transform transition hover:scale-105 hover:shadow-2xl"
            >
              <h2 className="font-bold text-2xl mb-2">{essay.title}</h2>
              <p className="text-gray-600">{essay.summary}</p>
              <a
                href={essay.url}
                className="inline-block mt-4 text-indigo-500 font-semibold hover:underline"
              >
                Baca selengkapnya →
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
