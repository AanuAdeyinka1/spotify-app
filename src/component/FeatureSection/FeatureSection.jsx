import style from "./Style.module.css"
import { feature } from "./Data"

export const Features = () => {
  
  return <section className = {style.feature}>
      <h3 className = {style.head}>The power of Premium</h3>
      <div className = {style.list}>
        {feature.map((feature) => (
          <div className = {style.item}>
            <img src={feature.image} />
            <div>
              <h5 className={style.title}>{feature.title}</h5>
              <p className={style.description}>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
};
