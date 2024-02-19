import Project from '../Project';
import styles from './styles.module.scss';
import {IconPuzzleFilled} from '@tabler/icons-react';

function Projects() {
  return (
    <>
      <section className={styles.projects} id="projects">
        {/* <div className={styles.container}>
          <h2 className={styles['new-projects']}>New Projects coming soon..</h2>
        </div> */}

        <div className={styles.container}>
          <div className={styles['projects-content']}>
            <p>Portfolio</p>
            <h3>
              Each project is a unique piece of development{' '}
              <IconPuzzleFilled style={{rotate: '16deg', color: '#00e698'}} />
            </h3>
          </div>

          <div className={styles['bento-wrapper']}>
            <div className={styles['bento-top']}>
              <div style={{gridArea: '1 / 1 / 3 / 2'}}>
                <Project />
              </div>

              <Project />
              <Project />
            </div>
            <div className={styles['bento-bottom']}>
              <Project
                gitUrl="https://github.com/stopcallingmyname/Modsen-Weather-Task"
                publicUrl="https://www.w3schools.com/html/html_links.asp"
              />
              <Project />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
