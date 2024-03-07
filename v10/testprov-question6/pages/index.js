// 6. Next pages router med foto-länkar 5p
// Visa på sidan: 10 thumbnails (små foton) från detta api: https://jsonplaceholder.typicode.com/photos/
// Api:et ger tillbaka en array med foto-objekt.
//
// Url:en till varje thumbnail finns i "thumbnailUrl" i varje foto-objekt.
// När man klickar på fotot ska man komma till en sida som visar det större fotot som
// finns i "url" för varje foto-objekt.
//
// Om man skickar med id:et för fotot i länken kan man hämta info om just det fotot genom att
// anropa api:et med det id:et. Så här: `https://jsonplaceholder.typicode.com/photos/${id}`
// För id 12 blir alltså anropet: https://jsonplaceholder.typicode.com/photos/12

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function getPhotos() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos/"
      );
      const data = await response.json();
      setPhotos(data.slice(0, 10));
    }

    getPhotos();
  }, []);

  return (
    <main>
      {photos.map((photo) => {
        return (
          <Link href={`/photos/${photo.id}`}>
            <img src={photo.thumbnailUrl} />
          </Link>
        );
      })}
    </main>
  );
}
