import "./card-text.css";

export default function CardText({ text }) {
  return (
    <div class="card-text-container">
      <span>{text}</span>
    </div>
  );
}
