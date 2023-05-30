import Image from "next/image";
import { Inter } from "next/font/google";
import Gallery from "./photos/Gallery.js";
const inter = Inter({ subsets: ["latin"] });
const imagsList = [
  "/img/2A1A4008.jpg",
  "/img/2A1A4159.jpg",
  "/img/2A1A4208.jpg",
  "/img/2A1A4036.jpg",
  "/img/2A1A4005.jpg",
  "/img/2A1A4048.jpg",
  "/img/2A1A4170.jpg",
  "/img/2A1A4138.jpg",
  "/img/2A1A4212.jpg",
  "/img/2A1A3998.jpg",
  "/img/2A1A4002.jpg",
  "/img/2A1A4210.jpg",
  "/img/2A1A3999.jpg",
  "/img/IMG_3323.JPG",
  "/img/IMG_3324.JPG",
];

export default function Home() {
  const ImageList = imagsList.map((img) => (
    <div
      key={img}
      className="col-span-6 md:col-span-4 lg:col-span-3 aspect-video w-full bg-gray-100 relative"
    >
      <Image src={img} fill className="object-cover" alt="Bay Photo"></Image>
    </div>
  ));
  return (
    <div className="m2 grid grid-cols-12 gap-2">
      <Gallery></Gallery>
      {ImageList}
    </div>
  );
}
