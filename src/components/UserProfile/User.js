import dateFormat from "dateformat";

const User = (props) => {
  const date = dateFormat(props.date, "mmm d, yyyy");

  return (
    <div className="user">
      <img src={props.img} alt={props.fullName} className="user--img" />
      <h3>{props.fullName ? props.fullName : "No name given"}</h3>
      <div className="user--address">
        <span>From:</span> <p>{props.address ? props.address : "no address"}</p>
      </div>
      <p>
        <span>Email:</span> <a href={`mailto: ${props.email}`}>{props.email}</a>
      </p>
      <p>
        <span>Registered:</span> {date}
      </p>
    </div>
  );
};

export default User;
