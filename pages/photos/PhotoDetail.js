import { useRouter } from "next/router";
import PhotoItem from "../PhotoItem";
import PhotoComment from "./PhotoComment";
export default function PhotoDetail() {
  const router = useRouter();
  const photoId = router.query.imgId;
  return (
    <div>
      <h1>Photo Detail</h1>
      <p>Photo ID: {photoId}</p>
      <PhotoItem imgId={photoId}></PhotoItem>
      <PhotoComment imgId={photoId}></PhotoComment>
    </div>
  );
}
