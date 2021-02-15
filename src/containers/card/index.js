import { CardHeader, CardText, CardFooter, CardImage } from "../../components";
import "./card.css";

export default function Card({
  name,
  username,
  text,
  date,
  likes,
  shares,
  comments,
  image = "",
}) {
  return (
    <div className="card-container">
      <div className="avatar"></div>
      <div className="card-content">
        <CardHeader name={name} username={username} date={date} />
        <CardText text={text} />
        {image && <CardImage image={image} />}
        <CardFooter likes={likes} comments={comments} shares={shares} />
      </div>
    </div>
  );
}
