import "./card-header.css";

export default function CardHeader({ name, username, date }) {
  return (
    <div className="card-header">
      <a className="account-group" href="#">
        <span className="full-name">
          <strong>{name}</strong>
        </span>
        <span className="username">@{username}</span>
        <span className="date-group">
          <small>&#8226; </small>
          <span className="date">{date}</span>
        </span>
      </a>
    </div>
  );
}
