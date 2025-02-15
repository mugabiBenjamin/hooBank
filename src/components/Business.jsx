import PropTypes from 'prop-types';  
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter}`}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-normal text-white text-[14px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
)

// Define prop types  
FeatureCard.propTypes = {  
  icon: PropTypes.string.isRequired,        // Expecting a string for image URL  
  title: PropTypes.string.isRequired,       // Expecting a string for title  
  content: PropTypes.string.isRequired,     // Expecting a string for content  
  index: PropTypes.number.isRequired,       // Expecting a number for index  
};  

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>You do the business, <br className="sm:block hidden"/> we&apos;ll handle the money</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right credit card , you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
      </p>

      <Button styles="mt-10" />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
)

export default Business