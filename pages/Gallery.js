import PhotoItem from "./PhotoItem";
export default function Gallery() {
  return (
    <>
      <h1>My Baby Photos</h1>
      <section className="columns-4 gap-8">
        <PhotoItem className="w-full aspect-square"></PhotoItem>
        <PhotoItem></PhotoItem>
        <PhotoItem></PhotoItem>
        <PhotoItem></PhotoItem>
        <PhotoItem></PhotoItem>
        <PhotoItem></PhotoItem>
        <PhotoItem></PhotoItem>
      </section>
    </>
  );
}
