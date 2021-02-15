import "./card-footer.css";

export default function CardFooter({ comments, shares, likes }) {
  return (
    <div className="footer-container">
      <span className="footer-content">
        <span>{comments} Comments</span>
        <span>{shares} Shares</span>
        <span>{likes} Likes</span>
      </span>
    </div>
  );
}
