import styles from '../style';
import { discount, robot } from '../assets';
import GetStarted from './GetStarted';

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
        <img src={discount} alt="discount" className='w-[32px] h-[32px] object-contain' />
        <p className={`${styles.paragraph} ml-2 text-[14px] sm:text-[16px]`}>
          <span className='text-white'>20%</span> Discount For {' '}
          <span className='text-white'>1 Month</span> Account
        </p>
      </div>

      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-poppins font-semibold text-[40px] sm:text-[52px] md:text-[72px] text-white leading-[55px] sm:leading-[75px] md:leading-[90px]'>
          The Next <br className='sm:block hidden' /> {' '}
          <span className='text-gradient'>Generation</span> {' '}
        </h1>

        <div className='sm:flex hidden md:mr-4 mr-0'>
          <GetStarted />
        </div>
      </div>

      <h1 className='font-poppins font-semibold text-[40px] sm:text-[52px] md:text-[68px] text-white leading-[55px] sm:leading-[75px] md:leading-[90px] w-full'>
        Payment Method
      </h1>

      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-[16px] sm:text-[18px]`}>
        Our Team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.
      </p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={robot} alt="billing" className='w-[100%] h-[100%] relative z-[5]' />

      <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'></div>
      <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient'></div>
      <div className='absolute z-[0] w-[50%] h-[50%] bottom-20 right-20 blue__gradient'></div>
    </div>

    <div className={`sm:hidden ${styles.flexCenter} mt-6`}>
      <GetStarted />
    </div>
  </section>
)

export default Hero;