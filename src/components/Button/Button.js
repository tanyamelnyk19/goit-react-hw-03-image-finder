import './Button.css';

export default function Button({ handleButtonLoadMore }) {
  return (
    <button type="button" className="button" onClick={handleButtonLoadMore}>
      Load more
    </button>
  );
}
