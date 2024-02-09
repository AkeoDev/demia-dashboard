import { ReactSVG } from 'react-svg';
import classes from './Header.module.scss';
import { notificationsIcon } from '../../assets';
import { SearchBox } from './SearchBox/SearchBox';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header className={classes['header']}>
                <div className={classes['header__icons']}>
                    <Link to={'/notifications'}>
                    <ReactSVG className={classes['notifications']} wrapper="span" src={notificationsIcon}></ReactSVG>
                    </Link>
                    <SearchBox onChange={() => null}></SearchBox>
                </div>
                <div className={classes['user']}>PJ</div>
        </header>
    )
}