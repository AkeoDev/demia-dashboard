import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { signInBtnIcon } from "../../assets";
import classes from "./Button.module.scss";
import { ReactNode } from "react";
import { ButtonPropsType } from "../../utils/types";

export const Button: React.FC<ButtonPropsType> = ({
  children,
  onClick = () => null,
  isLink = false,
  href = "#",
  icon = "",
  className= "",
}) => {
  return isLink ? (
    <Link to={href} className={`${classes.button} ${className}`}>
      {icon && <ReactSVG src={icon} className={classes.buttonIcon}></ReactSVG>}
      {children as ReactNode}
    </Link>
  ) : (
    <button className={`${classes.button} ${className}`} onClick={onClick}>
      {icon && <ReactSVG src={icon} className={classes.buttonIcon}></ReactSVG>}
      {children as ReactNode}
    </button>
  );
};
