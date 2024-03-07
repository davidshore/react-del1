import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Photo() {
  const router = useRouter();
  const { id } = router.query;

  const [photo, setPhoto] = useState();

  useEffect(() => {
    async function getPhoto() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos/" + id
      );
      const data = await response.json();
      setPhoto(data);
    }
    getPhoto();
  }, [id]);

  if (!photo) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <img src={photo.url} />
    </div>
  );
}
