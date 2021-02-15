import "./card-image.css";

export default function CardImage({ image }) {
  return (
    <div className="card-image">
      <span>{image}</span>
    </div>
  );
}
