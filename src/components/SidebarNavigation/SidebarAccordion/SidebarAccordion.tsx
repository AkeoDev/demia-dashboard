import { FunctionComponent, useEffect, useState } from 'react';
import classes from './SidebarAccordion.module.scss';
import { NavLink, useParams } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import { allProjectsIcon, arrowIcon, projectIcon } from '../../../assets';

const projects: Array<{
  projectName: string;
  projectSlug: string;
  slug: string;
  projectId: number;
}> = [
  {
    projectId: 1,
    projectName: 'Copiulemu LFG site',
    slug: "copiulemu-lfg-site",
    projectSlug: 'projects/copiulemu-lfg-site'
  },
  {
    projectId: 2,
    slug: "loma-los-colorado",
    projectName: 'Loma Los Colorado',
    projectSlug: 'projects/loma-los-colorado'
  },
  {
    projectId: 3,
    slug: "santa-marta-lfg",
    projectName: 'Santa Marta LFG',
    projectSlug: 'projects/santa-marta-lfg'
  }
];

export const SidebarAcccordion: FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeProjectName, setActiveProjectName] = useState<string>('');
  const [activeProjectId, setActiveProjectId] = useState<number>();

  const { slug } = useParams();

  useEffect(() => {
    const activeProject = projects.find((project) => project.slug === slug);

    if (activeProject) {
      setActiveProjectName(activeProject.projectName);
      setActiveProjectId(activeProject.projectId);
    }
  }, []);

  const toggleAccordion = () => setIsOpen((prev) => !prev);
  const closeAccordion = () => setIsOpen(false);

  return (
    <div className={classes['sidebar-accordion']}>
      <div
        className={classes['sidebar-accordion-header']}
        onClick={toggleAccordion}
      >
        <div className={classes['sidebar-accordion-header__info']}>
          <span>PROJECTS</span>
          <span className={classes['project-name']}>{activeProjectName}</span>
        </div>
        <img
          className={`${isOpen && classes['rotate']}`}
          src={arrowIcon}
          alt=""
        />
      </div>
      <div
        className={
          classes['sidebar-accordion-body'] +
          ' ' +
          (isOpen && classes['active'])
        }
      >
        <div className={classes['links']}>
          {projects.map((project, index) => (
            <NavLink
              key={index}
              to={`/${project.projectSlug}`}
              className={() => {

                if (project.projectId === activeProjectId) {
                  return `${classes['active']}`
                }
              }}
              onClick={() => {
                closeAccordion();
                setActiveProjectName(project.projectName);
                setActiveProjectId(project.projectId);
              }}
            >
              <ReactSVG wrapper="span" src={projectIcon} className={classes.projectIcon}/>
              {project.projectName}
            </NavLink>
          ))}
          <div className={classes['spacer']}></div>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? `${classes['all-projects']} ${classes['active']}`
                : classes['all-projects']
            }
          >
            <ReactSVG
              wrapper="span"
              src={allProjectsIcon}
              className={classes.hamburger}
            ></ReactSVG>
            All Projects
          </NavLink>
        </div>
      </div>
    </div>
  );
};
