import style from "./Style.module.css"

export const DiscountFlag = () => {
    return (
      <div className={style.discount}>
        <p>Special discount for eligible students in university</p>
        <button className={style.learnmore}>Learn more</button>
      </div>
    );
}