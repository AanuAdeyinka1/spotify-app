import style from "./Style.module.css";
import { paymentMethods, PricingList } from "./data.js";
import { PricingCardItem } from "./PricingCard";
import { DiscountFlag} from "./DiscountFlag.jsx"
export const PricingSection = () => {
  const renderPaymentMethod = (method) => {
    if (method.icon) return <img src={method.icon} />;
    return null;
  };
  return (
    <section className={style.section}>
        <div className={style.title}>
       <h1 className={style.cardTitle}> Pick your Premium</h1>
      <p className={style.cardPara}>
        Listen without limits on your phone, speaker, and other devices.
      </p>
      <div className={style.paymentMethod}>{paymentMethods.map(renderPaymentMethod)}</div>     
        </div>
      
      <div>
        {PricingList.map(() => {
          return <PricingCardItem />;
        })}
      </div>
      <br />
      <br />
      <DiscountFlag />
    </section>
  );
};
