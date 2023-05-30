import Image from "next/image";
export default function PhotoItem({ imgId }) {
  return (
    <Image
      width={200}
      height={400}
      src={imgId}
      alt="'Floralis Genérica' by Eduardo Catalano: a gigantic metallic flower sculpture with reflective petals"
    />
  );
}
