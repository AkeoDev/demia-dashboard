import { ReactSVG } from 'react-svg';
import classes from './Header.module.scss';
import { notificationsIcon } from '../../assets';
import { SearchBox } from './SearchBox/SearchBox';

export const Header = () => {
    return (
        <header className={classes['header']}>
                <div className={classes['header__icons']}>
                    <ReactSVG className={classes['notifications']} wrapper="span" src={notificationsIcon}></ReactSVG>
                    <SearchBox onChange={() => null}></SearchBox>
                </div>
                <div className={classes['user']}>PJ</div>
        </header>
    )
}