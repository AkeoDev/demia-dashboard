import { MouseEventHandler } from "react";

export interface ButtonPropsType {
    children: string | JSX.Element | JSX.Element[] | (() => JSX.Element),
    onClick?: MouseEventHandler,
    isLink?: boolean,
    href?: string,
    icon?: string,
    className?: string,
}