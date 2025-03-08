import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section 
    className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
    aria-label="Key Statistics"
  >
    {stats.map((stat) => (
      <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
        <span aria-label={`${stat.value} ${stat.title}`}>
          <span className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>{stat.value}</span>
          <span className='font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-white text-gradient uppercase ml-3'>{stat.title}</span>
        </span>
      </div>
    ))}
  </section>
)

export default Stats