import { FunctionComponent, useEffect, useState } from 'react';
import classes from './SidebarAccordion.module.scss';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import { allProjectsIcon, arrowIcon, projectIcon } from '../../../assets';

const projects: Array<{
  projectName: string;
  projectLink: string;
  projectId: number;
}> = [
  {
    projectId: 1,
    projectName: 'Copiulemu LFG site',
    projectLink: '#'
  },
  {
    projectId: 2,
    projectName: 'Loma Los Colorado',
    projectLink: '#'
  },
  {
    projectId: 3,
    projectName: 'Santa Marta LFG',
    projectLink: '#'
  }
];

export const SidebarAcccordion: FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeProjectName, setActiveProjectName] = useState<string>('');
  const [activeProjectId, setActiveProjectId] = useState<number>();

  useEffect(() => {
    setActiveProjectName(projects[0].projectName);
    setActiveProjectId(projects[0].projectId);
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
        <img className={`${isOpen && classes['rotate']}`} src={arrowIcon} alt="" />
      </div>
      <div
        className={classes['sidebar-accordion-body'] + ' ' + (isOpen && classes['active'])}
      >
        <div className={classes['links']}>
          {projects.map((project, index) => (
            <Link
              key={index}
              to={project.projectLink}
              className={
                classes['project-link']
              }
              onClick={() => {
                closeAccordion();
                setActiveProjectName(project.projectName);
                setActiveProjectId(project.projectId);
              }}
            >
              <ReactSVG wrapper="span" src={projectIcon} />
              {project.projectName}
            </Link>
          ))}
          <div className={classes['spacer']}></div>
          <Link to="#" className={classes['all-projects']}>
            <ReactSVG wrapper="span" src={allProjectsIcon}></ReactSVG>
            All Projects
          </Link>
        </div>
      </div>
    </div>
  );
};
