import "./ImagePreview.css";

const ImagePreview = ({ previewImage = "", list, ...props }) => {
  return (
    <div className="preview_container">
      {list !== 0 && previewImage === "" ? (
        <div className="no_preview_data">Select image to preview</div>
      ) : previewImage !== "" ? (
        <img
          src={previewImage}
          alt={"preview"}
          className="preview_placeholder"
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default ImagePreview;
