import { quotes } from "../assets";
import PropTypes from 'prop-types';

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex justify-between flex-col px-5 sm:px-10 py-8 sm:py-12 rounded-[20px] h-full feedback-card">
    <img src={quotes} alt="double_quotes" className="w-[42px] h-[27px] object-contain" />
    <p className="font-normal text-[16px] sm:text-[18px] leading-[28px] sm:leading-[32px] text-white my-6 sm:my-10 flex-grow">{content}</p>

    <div className="flex flex-row items-center">
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />

      <div className="flex flex-col ml-4">
        <h4 className="font-semibold text-[18px] sm:text-[20px] leading-[28px] sm:leading-[32px] text-white">{name}</h4>
        <p className="font-normal text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px] text-white">{title}</p>
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