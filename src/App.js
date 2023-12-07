import React, { useState } from "react";
import "./App.css";
import ImageListing from "./components/ImageListing/ImageListing";
import ImagePreview from "./components/ImagePreview/ImagePreview";

const App = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [images, setImages] = useState([]);
  const [previewImage, setPreviewImage] = useState("");

  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handleImportImage = () => {
    if (imageUrl !== "") {
      setImages([...images, imageUrl]);
      setImageUrl("");
    }
  };

  const handleImageClick = (url) => {
    setPreviewImage(url);
  };

  return (
    <div className="App">
      <h1>Image Browser</h1>
      <div className="action-container">
        <input
          type="text"
          value={imageUrl}
          onChange={handleImageUrlChange}
          placeholder="Enter Image URL"
        />
        <button onClick={handleImportImage}>Import Image</button>
      </div>
      <div className="image_container">
        <ImageListing images={images} handleImageClick={handleImageClick} />
        <ImagePreview previewImage={previewImage} list={images.length} />
      </div>
    </div>
  );
};

export default App;

// Sample links to upload mentioned below:

// https://cdn.pixabay.com/photo/2020/02/08/00/35/animated-4828785_1280.jpg
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJcLG3Pf8gkYls4yDMqwkNJ0XYYldg12JNEg&usqp=CAU
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpRZvyoQ4CURfzV1dgRHpL3ZLRFJUMaP9FxzdGbdWolV9eTYIYIGJkjIF07uTgBDX2jfs&usqp=CAU
