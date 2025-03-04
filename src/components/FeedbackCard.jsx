import { quotes } from "../assets";
import PropTypes from 'prop-types';

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[320px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <img src={quotes} alt="double_qoutes" className="w-[42px] h-[27px[ object-contain" />
    <p className="font-normal text-[18px] leading-[32px] text-white my-10">{content}</p>

    <div className="flex flex-row">
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />

      <div className="flex flex-col ml-4">
        <h4 className="font-semibold text-[20px] leading-[32px] text-white">{name}</h4>
        <p className="font-normal text-[16px] leading-[24px] text-white">{title}</p>
      </div>
    </div>
  </div>
)

FeedbackCard.propTypes = {
  content: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default FeedbackCard;