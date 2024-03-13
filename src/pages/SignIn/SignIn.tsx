import { Link } from "react-router-dom";
import { eyeIconOff, eyeIconOn, logo, signIn } from "../../assets";
import classes from "./SignIn.module.scss";
import { FunctionComponent, useState } from "react";

export const SignIn: FunctionComponent = () => {
  const [isHidden, setIsHidden] = useState<boolean>(true);

  const eyeIconClickHandler = () => {
    setIsHidden((prevState) => !prevState);
  };

  return (
    <main className={classes.signIn}>
      <article className={classes.left}>
        <div className={classes.logoContainer}>
          <img src={logo} alt=" Logo" />
        </div>
        <section className={classes.signInContainer}>
          <div className={classes.innerContent}>
            <h1 className={classes.title}>Sign in to access the dashboard</h1>
            <form action="" className={classes.form}>
              <div className={classes.input}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" />
              </div>
              <div className={`${classes.input} ${classes.password}`}>
                <label htmlFor="password">Password</label>
                <input
                  type={isHidden ? "password" : "text"}
                  name="password"
                  id="password"
                />
                <img
                  src={isHidden ? eyeIconOn : eyeIconOff}
                  alt="Eye Icon"
                  onClick={eyeIconClickHandler}
                />
              </div>
              {/* <p className={classes.error}>
                Credentials are not good, please try again.
              </p> */}
              <button type="submit" className={classes.submitButton}>
                Log In
              </button>
            </form>
            <p className={classes.text}>Don’t have an account?</p>
            <Link to="mailto:info@digitalmrv.io" className={classes.accessText}>
              Request access here
            </Link>
          </div>
        </section>
      </article>
      <aside className={classes.right}>
        <img src={signIn} alt="Sign In image" />
      </aside>
    </main>
  );
};
