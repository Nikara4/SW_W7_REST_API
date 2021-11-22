import { useParams } from "react-router-dom";
import dateFormat from "dateformat";

import Button from "./Button";
import UserLocation from "./UserLocation";

const UserDescription = ({ users }) => {
  const { userId } = useParams();

  const { name, location, email, registered, picture } = users.find(
    (user) => user.user_id === userId
  );

  const fullName =
    name.title || name.last
      ? `${name.title}. ${name.first} ${name.last}`
      : "No name or surname provided";

  const addressFirstLine = location
    ? `${location.street.number}
  ${location.street.name}`
    : "No address";

  const addressSecondLine = location
    ? `${location.city}, ${location.country}`
    : "No address";

  const date = dateFormat(registered.date, "fullDate");

  const position = [
    parseFloat(location.coordinates.latitude),
    parseFloat(location.coordinates.longitude)
  ];

  return (
    <div className="user__profile">
      <img src={picture.thumbnail} alt={fullName} className="user__img" />
      <h2>{fullName}</h2>
      <div className="address">
        <span>Full addres:</span>
        <p>{addressFirstLine}</p>
        <p>{addressSecondLine}</p>
      </div>
      <p>
        <span>Email:</span> <a href={`mailto: ${email}`}>{email}</a>
      </p>
      <p>
        <span>Registered:</span> {date}
      </p>

      <div className="map">
        <span>Location:</span>
        <UserLocation
          address={`${addressFirstLine}, ${addressSecondLine}`}
          position={position}
        />
      </div>
      <Button />
    </div>
  );
};

export default UserDescription;
