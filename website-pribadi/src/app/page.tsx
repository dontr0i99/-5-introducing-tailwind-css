import type { Metadata } from "next";
import Image, { StaticImageData } from "next/image";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import image1 from "../../public/images/Foto.jpg";
import { defaultMetadata } from '../utils/metadata';

export const metadata: Metadata = {
  title: "Tentang Saya",
  description: "Halaman tentang saya.",
  openGraph: {
    images: "https://example.com/default-image.jpg",
    url: "https://example.com",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 flex flex-col items-center justify-center px-6 py-10 text-white">
      <div className="bg-white shadow-2xl rounded-3xl p-20 pb-15 max-w-2/4 text-center border border-gray-300">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Image
            src={image1}
            alt="Foto Profil"
            width={180}
            height={180}
            className="rounded-full border-4 border-indigo-400 shadow-lg"
          />
          <div className="text-left">
            <h1 className="text-4xl font-extrabold text-indigo-700">
              M. Tryo Bagus Anugerah Putra
            </h1>
            <p className="text-indigo-600 text-lg mt-2">
              Mahasiswa Teknik Informatika | Data Engineer Enthusiast
            </p>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Saya adalah mahasiswa yang tertarik dalam bidang Data Engineering,
              Machine Learning, dan Data Science. Berpengalaman dalam
              pengelolaan database dan analisis data menggunakan berbagai
              teknologi modern.
            </p>
            <div className="mt-4 flex gap-8">
              <p className="text-gray-600">
                Contact:
              </p>
              <a
                href="https://www.linkedin.com/in/mtryobagus/"
                className="text-indigo-700 text-3xl hover:text-indigo-500"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/dontr0i99"
                className="text-indigo-700 text-3xl hover:text-indigo-500"
              >
                <FaGithub />
              </a>
              <a
                href="https://instagram. com/tryo.bap_"
                className="text-indigo-700 text-3xl hover:text-indigo-500"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-center gap-4">
          <a
            href="/projects"
            className="bg-indigo-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-indigo-700 transition-transform transform hover:scale-105"
          >
            Proyek
          </a>
          <a
            href="/essays"
            className="bg-gray-300 text-gray-800 py-2 px-6 rounded-lg shadow-lg hover:bg-gray-400 transition-transform transform hover:scale-105"
          >
            Esai
          </a>
        </div>
      </div>
    </div>
  );
}
