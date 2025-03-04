import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';


const CarDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hiddden' /> in few easy steps</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, quaerat nam minima quia animi reprehenderit dolore ducimus? Nobis pariatur soluta voluptas aspernatur hic totam laboriosam sequi quod impedit, expedita commodi.</p>

      <Button styles='mt-10' />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className='w-[100%] h-[100%]' />
    </div>
  </section>
)

export default CarDeal