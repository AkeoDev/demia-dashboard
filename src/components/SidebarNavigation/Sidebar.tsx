import { FunctionComponent } from "react";
import classes from './Sidebar.module.scss';
import { activityIcon, analyticsIcon, dashboardIcon, dataSourcesIcon, documentationIcon, logo, usersIcon } from "../../assets";
import { SidebarAcccordion } from "./SidebarAccordion/SidebarAccordion";
import { NavLink, useMatches } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { IProject } from "../../utils/types/Project";

export const SidebarNavigation: FunctionComponent = () => {
  const loaderSlug: string = (useMatches()[0].data as { data: IProject, slug: string}).slug;

    return (
        <aside className={classes['sidebar']}>
            <div className={classes['logo-and-projects']}>
                <div className={classes['logo']}>
                    <img src={logo} alt="" />
                </div>
                <SidebarAcccordion></SidebarAcccordion>
            </div>
            <nav className={classes['navigation']}>
                {/* Link components */}
                <NavLink to={`/${loaderSlug}`} end className={({isActive}) => isActive ? classes['active'] : ''}><ReactSVG wrapper="span" className={classes['fill']} src={dashboardIcon}></ReactSVG> Dashboard</NavLink>
                <NavLink to={`/${loaderSlug}/analytics`} className={({isActive}) => isActive ? classes['active'] : ''}><ReactSVG wrapper="span" className={classes['fill']} src={analyticsIcon}></ReactSVG> Analytics</NavLink>
                <NavLink to={`/${loaderSlug}/data-sources`} className={({isActive}) => isActive ? classes['active'] : ''}><ReactSVG wrapper="span" className={classes['stroke']} src={dataSourcesIcon}></ReactSVG> Data Sources</NavLink>
                <NavLink to={`/${loaderSlug}/documentation`} className={({isActive}) => isActive ? classes['active'] : ''}><ReactSVG wrapper="span" className={classes['stroke']} src={documentationIcon}></ReactSVG> Documentation</NavLink>
                <NavLink to={`/${loaderSlug}/activity`} className={({isActive}) => isActive ? classes['active'] : ''}><ReactSVG wrapper="span" className={classes['stroke']} src={activityIcon}></ReactSVG> Activity</NavLink>
                <NavLink to={`/${loaderSlug}/users`} className={({isActive}) => isActive ? classes['active'] : ''}><ReactSVG wrapper="span" className={classes['stroke']} src={usersIcon}></ReactSVG> Users</NavLink>
            </nav>
        </aside>
    )
}