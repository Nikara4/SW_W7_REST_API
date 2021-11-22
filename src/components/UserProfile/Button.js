import { Link } from "react-router-dom";

const Button = () => {
  return (
    <button className="user__profile--button">
      <Link className="user__profile--button__link" to="/week7">
        Previous Page
      </Link>
    </button>
  );
};

export default Button;
