import { Link } from "react-router-dom";
import { logo, signIn, signInBtnIcon } from "../../assets";
import classes from "./SignIn.module.scss";
import { Button } from "../../components/Buttons/Button";

export const SignIn = () => {
  return (
    <main className={classes.signIn}>
      <article className={classes.left}>
        <div className={classes.logoContainer}>
          <img src={logo} alt=" Logo" />
        </div>
        <section className={classes.signInContainer}>
          <div className={classes.innerContent}>
            <h1 className={classes.title}>Sign in to access the dashboard</h1>
            <Button
              isLink
              href={`#`}
              icon={signInBtnIcon}
              className={classes.button}
            >
              Sign in with ScribeHub
            </Button>
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
