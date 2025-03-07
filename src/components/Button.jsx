import PropTypes from 'prop-types';

const Button = ({ styles, onClick, text }) => (
  <button
    type="button"
    className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-black outline-none ${styles} rounded-[10px] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#33bbcf] transition-all`}
    onClick={onClick}
    aria-label={text}
  >
    {text}
  </button>
)

Button.propTypes = {
  styles: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
};

Button.defaultProps = {
  styles: '',
  onClick: () => { },
  text: 'Get Started',
};

export default Button