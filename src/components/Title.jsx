import PropTypes from "prop-types";

const Title = ({ text }) => {
  return (
    <div className="inline-flex gap-2 items-center mb-3">
      <p className="permanent-marker-regular text-shadow-black-medium font-outline-3 primary-color">
        {text}
      </p>
    </div>
  );
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
