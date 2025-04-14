import type { Metadata } from "next";
import Image, { StaticImageData } from "next/image";
import image1 from "../../../public/images/project1.png";
import image2 from "../../../public/images/project2.png";
import image3 from "../../../public/images/project3.png";
import { defaultMetadata } from '../../utils/metadata';

export const metadata: Metadata = {
  title: "Proyek",
  description: "Halaman Proyek.",
  openGraph: {
    images: "https://example.com/default-image.jpg",
    url: "https://example.com",
  },
};

type ProjectItemProps = {
  name: string;
  url: string;
  urlDisplay: string;
  imageSrc: StaticImageData;
};

function ProjectItem({ name, url, urlDisplay, imageSrc }: ProjectItemProps) {
  return (
    <li className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition hover:scale-105 hover:shadow-2xl">
      <a href={url} className="block">
        <Image className="w-full h-full object-cover" src={imageSrc} alt={name}></Image>
        <div className="p-6">
          <h3 className="font-bold text-xl text-indigo-700">{name}</h3>
          <p className="mt-2 text-indigo-500 font-medium">{urlDisplay}</p>
        </div>
      </a>
    </li>
  );
}

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 flex flex-col items-center px-8 py-12 text-white">
      <header className="text-center">
        <h1 className="font-extrabold text-5xl">Proyek Saya</h1>
        <p className="text-lg mt-4 max-w-2xl">
          Berikut adalah beberapa proyek yang telah saya kerjakan selama perkuliahan di Politeknik Negeri Malang.
        </p>
      </header>
      <div className="mt-12 w-full max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Aplikasi</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectItem name="Pinjam.in" url="https://github.com/Danni4421/pinjam.in" urlDisplay="App Store" imageSrc={image1}></ProjectItem>
          <ProjectItem name="SISBAN 07" url="https://github.com/Danni4421/sisban" urlDisplay="Play Store" imageSrc={image2}></ProjectItem>
          <ProjectItem name="Glow Guide" url="https://drive.google.com/file/d/19I0Gz-VB1OGtpZootoAzxa-7EzU4_Tfz/view?usp=sharing" urlDisplay="Play Store" imageSrc={image3}></ProjectItem>
        </ul>
      </div>
    </div>
  );
}