import './ImageGalleryItem.css';

export default function ImageGalleryItem({ img }) {
  return (
    <li key={img.id} className="ImageGalleryItem">
      <img
        src={img.webformatURL}
        alt={img.tags}
        width="300"
        className="ImageGalleryItem-image"
      />
    </li>
  );
}
