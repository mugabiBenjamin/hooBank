import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
    </div>

    <div className="absolute z-[0] -left-1/2 w-[50%] h-[50%] rounded-full pink__gradient " />

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Easily control your billing <br className="sm:block hidden" /> and invoicing</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Streamline your financial operations with our intuitive billing and invoicing system. Automate recurring payments, generate professional invoices, and gain real-time insights into your cash flow. Our secure platform helps you save time and reduce errors.</p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="apple_store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_store" className="w-[128px] h-[42px] object-contain cursor-pointer" />
      </div>
    </div>

  </section>
)

export default Billing