import { FunctionComponent, ReactElement, ReactPortal } from "react";
import { SidebarNavigation } from "../SidebarNavigation/Sidebar";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import classes from './Layout.module.scss';

type ReactText = string | number;
type ReactChild = ReactElement | ReactText;

interface ReactNodeArray extends Array<ReactNode> {}
type ReactFragment = {} | ReactNodeArray;
type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;

export const Layout: FunctionComponent<{children?: ReactNode}> = ({ children }) => {
    return (
        <main className={classes['main']}>
            <aside className={classes['sidebar-container']}>
            <SidebarNavigation />
            </aside>
            <div className={classes['main__content']}>
                <Header />
                {children as React.ReactNode}
                <Footer />
                <div className={classes['gradient1']}></div>
                <div className={classes['gradient2']}></div>
            </div>
        </main>
    )
}