
import style from "../Pricing/Style.module.css"
import { PricingList} from "../../component/Pricing/data.js"

export const PricingCardItem = () => {
  return (
    
   <div className={style.cardList}> 
    <div className={style.card}>
      <div className={style.header}>
        <span className={style.free}>1 month free</span>
        <br />
        <br />
        <span className={style.oneTime}>One-time plans available</span>
        <br />
        <br />
        <h4 className={style.planName}>Individual</h4>
        <p className={style.para}>₹119/month after offer period</p>
        <p className={style.para}>1 account</p>
      </div>
      <div className={style.content}>
        <ul>
          <li>Ad-free music listening</li>
          <li>Group Session</li>
          <li>Download 10k songs/device on 5 devices</li>
        </ul>
        <button onClick={()=>{}} className={style.button}>VIEW PLANS</button>
      </div>
      <div className={style.footer}>
        <a href="#">Terms and conditions apply.</a> 1 month free not available for users who
        have already tried Premium.
      </div>
    </div>
  </div>
  );
}

