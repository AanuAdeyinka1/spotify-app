import "../SectionOne/SectionOne.css";

import {Button} from "./Button"

export const SectionOne = () => {
  return (
    <section className="section1">
      <div className="para-one">
        <p>Get Premium free for 1 month</p>
      </div>

      <div className="para-two">
        <p>
          Just ₹119/month after. Debit and credit cards accepted. Cancel
          anytime.
        </p>
        <Button />
        <p className = "para-three">
          Terms and conditions apply. 1 month free not available for users who
          have already tried Premium.
        </p>
      </div>
    </section>
  );
};

