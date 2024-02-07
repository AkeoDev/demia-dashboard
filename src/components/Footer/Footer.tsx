import { iota } from '../../assets';
import classes from './Footer.module.scss';

export const Footer = () => (
    <footer className={classes["footer"]}>
        <img src={iota} alt="" />
    </footer>
)