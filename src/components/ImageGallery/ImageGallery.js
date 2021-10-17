import ImageGalleryItem from '../ImageGalleryItem';
import './ImageGallery.css';

export default function ImageGallery({ searchResults }) {
  return (
    <ul className="ImageGallery">
      {searchResults.map(img => {
        return <ImageGalleryItem img={img} key={img.id} />;
      })}
    </ul>
  );
}
