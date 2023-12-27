import "./ImageListing.css";

const ImageListing = ({ images = [], handleImageClick, handleDelete }) => {
  return (
    <div className="container">
      {images.length === 0 ? (
        <div className="no_data"> Import image to view </div>
      ) : (
        <div className="list_wrapper">
          {images.map((image) => (
            <div
              key={image}
              onClick={() => handleImageClick(image)}
              className="image_wrapper"
            >
              <img src={image} alt={image} className="image_placeholder" />
              <button
                onClick={() => handleDelete(image)}
                className="delete_btn"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageListing;
