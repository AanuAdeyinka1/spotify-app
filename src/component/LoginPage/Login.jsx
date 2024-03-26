import blacksvg from "../Asset/Images/blacksvg.svg";
import style from "../LoginPage/style.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { CustomInput} from "../input/index"

export const LoginPage = () => {
  return (
    <div>
      <div className={style.img}>
        <img src={blacksvg} />
      </div>
      <hr />

      <div className={style.btn}>
        <button className={style.blue}>
          {" "}
          <FaFacebookF /> &nbsp; Continue with Facebook
        </button>
        <button className={style.black}>
          {" "}
          <FaApple /> &nbsp; Continue with Apple
        </button>
        <button className={style.white}>
          {" "}
          <FcGoogle /> &nbsp; Continue with Google
        </button>
      </div>

      <div className={style.dividerContent}>
        <p className={style.divider}></p>
        <span className={style.dividerPara}>OR</span>
        <p className={style.divider}></p>
      </div>
      <div className={style.labels}>
        <CustomInput
          type="email"
          placeholder={"Email address or username"}
          label={"Email address or username"}
        />
        <CustomInput
          type="password"
          placeholder={"Password"}
          label={"Password"}
        />
      </div>
      <a href="/Forgot-password" className={style.forgot}>Forgot your password?</a>
      
      <div className={style.flex}>
      <div>
        <input type="checkbox" />
        <label className={style.remember}>Remember me</label>
      </div>
      <div>
        <button className={style.greenBtn}>Login</button>
      </div>
      </div>

      <hr />
      <br />
      <p className={style.paraAcc}>Don't have an account?</p>
      <div className={style.button}>
        <button className={style.signup}>Sign up for Spotify</button>
      </div>

      


      {/* <div>
        <div>
          <a href="#">Forgot your password?</a>
          <input>Remember me</input>
        </div>
        <div>
            <button>LOG IN</button>
        </div>
            <hr />
      </div> */}
    </div>
  );
};
