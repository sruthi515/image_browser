import "./ImageListing.css";

const ImageListing = ({ images = [], handleImageClick }) => {
  return (
    <div className="container">
      {images.length === 0 ? (
        <div className="no_data"> Import image to view </div>
      ) : (
        <div className="list_wrapper">
          {images.map((image) => (
            <div key={image} onClick={() => handleImageClick(image)}>
              <img src={image} alt={image} className="image_placeholder" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageListing;
