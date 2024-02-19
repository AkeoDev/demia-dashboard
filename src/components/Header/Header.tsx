import { ReactSVG } from "react-svg";
import classes from "./Header.module.scss";
import { notificationsIcon } from "../../assets";
import { SearchBox } from "./SearchBox/SearchBox";
import { Link, useParams } from "react-router-dom";

export const Header = () => {
  const { slug } = useParams();
  const url = `/projects/${slug}/notifications`;

  return (
    <header className={classes["header"]}>
      <div className={classes["header__icons"]}>
        <Link to={url}>
          <ReactSVG
            className={classes["notifications"]}
            wrapper="span"
            src={notificationsIcon}
          ></ReactSVG>
        </Link>
        <SearchBox onChange={() => null}></SearchBox>
      </div>
      <div className={classes["user"]}>PJ</div>
    </header>
  );
};
