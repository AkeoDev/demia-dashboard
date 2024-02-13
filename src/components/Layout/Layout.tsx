import { FunctionComponent, ReactElement, ReactPortal } from "react";
import { SidebarNavigation } from "../SidebarNavigation/Sidebar";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import classes from './Layout.module.scss';
import { useLocation } from "react-router-dom";

type ReactText = string | number;
type ReactChild = ReactElement | ReactText;

interface ReactNodeArray extends Array<ReactNode> {}
type ReactFragment = {} | ReactNodeArray;
type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;

export const Layout: FunctionComponent<{children?: ReactNode}> = ({ children }) => {
    const location = useLocation();
    // console.log(asdf);
    return (
        <main className={classes['main']}>
            {location.pathname !== "/" && (
            <aside className={classes['sidebar-container']}>
            <SidebarNavigation />
            </aside>
            )}
            <div className={classes['main__content']}>
                <Header />
                <div className={classes['main__content-children']}>
                {children as React.ReactNode}
                </div>
                <Footer />
                <div className={classes['gradient1']}></div>
                <div className={classes['gradient2']}></div>
            </div>
        </main>
    )
}