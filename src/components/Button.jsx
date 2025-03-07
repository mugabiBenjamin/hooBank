import PropTypes from 'prop-types';

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-black outline-none ${styles} rounded-[10px]`}>
    Get Started
  </button>
)

Button.propTypes = {  
  styles: PropTypes.string,   // Expecting styles to be a string  
};  

Button.defaultProps = {
  styles: '',
};

export default Button