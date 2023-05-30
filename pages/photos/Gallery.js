import PhotoItem from "../PhotoItem";

import Link from "next/link";
export default function Gallery() {
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
  return (
    <>
      <h1>My Baby Photos</h1>
      <section>
        <ul>
          {imagsList.map((img) => (
            <li key={img}>
              <Link href={`/photos/PhotoDetail?imgId=${img}`}>{img}</Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
