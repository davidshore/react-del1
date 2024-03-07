// 2. Hämta och visa foton. 3p
// Ladda ner foton med fetch från denna url: https://jsonplaceholder.typicode.com/photos
// Visa dom första 20 fotona på sidan.
// Varje foto ska renderas i en egen komponent.

import { useEffect, useState } from "react";
import Photo from "./Photo";

function App() {
  const [photos, setPhotos] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => {
        data = data.slice(0, 20);
        setPhotos(data);
      });
  }, []);

  return (
    <div>
      {photos &&
        photos.map((photo) => {
          return <Photo key={photo.id} url={photo.url} />;
        })}
    </div>
  );
}

export default App;

// 3p
