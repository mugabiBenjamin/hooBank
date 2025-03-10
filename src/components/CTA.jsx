import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} flex-col sm:flex-row bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex flex-1 flex-col mb-6 sm:mb-0">
      <h2 className={styles.heading2}>Let&apos;s try our service now!</h2>
      <p className={`${styles.paragraph} w-full mt-5`}>
        Everything you need to accept card payments and grow your business anywhere on the planet
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0`}>
      <Button />
    </div>
  </section>
);

export default CTA;