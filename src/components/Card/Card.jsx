import PropTypes from "prop-types";
import "./Card.css";

export const Card = ({ children }) => {
  return (
    <div className="card">
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};
