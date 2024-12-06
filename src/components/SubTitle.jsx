import PropTypes from "prop-types";

const SubTitle = ({ text }) => {
  return (
    <div className="inline-flex gap-2 items-center mb-3">
      <p className="permanent-marker-regular text-shadow-black-small font-outline-1 primary-color">
        {text}
      </p>
    </div>
  );
};

SubTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SubTitle;
