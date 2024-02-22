import {useState, useEffect, FC} from 'react';
import Project from '../Project';
import styles from './styles.module.scss';
import {IconPuzzleFilled} from '@tabler/icons-react';

type GridAreaStyleType = {
  gridArea?: string;
};

const Projects: FC = () => {
  const [gridAreaStyle, setGridAreaStyle] = useState<GridAreaStyleType>({});

  useEffect(() => {
    const updateGridAreaStyle = () => {
      const newStyle: GridAreaStyleType =
        window.innerWidth > 630 ? {gridArea: '1 / 1 / 3 / 2'} : {};
      setGridAreaStyle((prevStyle) => {
        if (prevStyle.gridArea === newStyle.gridArea) {
          return prevStyle;
        }
        return newStyle;
      });
    };

    updateGridAreaStyle();

    const handleResize = () => {
      updateGridAreaStyle();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <section className={styles.projects} id="projects">
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
              <Project
                img="https://cdn.dribbble.com/users/2547736/screenshots/16309212/media/dfc6571df7ce9adadc6b4d2987558e53.png"
                title="NULLABLE"
                gitUrl="https://github.com/stopcallingmyname/Modsen-Weather-Task"
                publicUrl="https://www.w3schools.com/html/html_links.asp"
                style={gridAreaStyle}
              />
              <Project
                img="https://cdn.dribbble.com/users/2547736/screenshots/16309212/media/dfc6571df7ce9adadc6b4d2987558e53.png"
                title="Weather App"
                gitUrl="https://github.com/stopcallingmyname/Modsen-Weather-Task"
                publicUrl="https://www.w3schools.com/html/html_links.asp"
                // style={{rotate: '-4deg', marginLeft: '1.5rem'}}
              />
              <Project
                img="https://cdn.dribbble.com/users/2547736/screenshots/16309212/media/dfc6571df7ce9adadc6b4d2987558e53.png"
                title="Later.."
                gitUrl="https://github.com/stopcallingmyname/Modsen-Weather-Task"
                publicUrl="https://www.w3schools.com/html/html_links.asp"
                // style={{rotate: '4deg', margin: '1.5rem'}}
              />
            </div>
            {/* <div className={styles['bento-bottom']}>
              <Project
                img="https://cdn.dribbble.com/users/2547736/screenshots/16309212/media/dfc6571df7ce9adadc6b4d2987558e53.png"
                gitUrl="https://github.com/stopcallingmyname/Modsen-Weather-Task"
                publicUrl="https://www.w3schools.com/html/html_links.asp"
              />
              <Project />
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
